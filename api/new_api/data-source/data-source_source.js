const {QueryToMySql} = require("../../lib/mysql");
const {genProjectId} = require("../../lib/operations");
const path = require("path");
const fs = require("fs");

function getPathOfStorage() {
    return path.join(__dirname, '../../../files/datasources')
}
getPathOfStorage()
class DataSource_source_sql{
    async CreateSource (userId, name, type, key, callback) {
        let sId = genProjectId();
        QueryToMySql(`INSERT INTO \`data-sources\`(\`id\`, \`user_id\`, \`name\`, \`type\`, \`api_key\`) 
        VALUES ('${sId}','${userId}','${name}','${type}','${key | null}')`, function (res) {
            console.log('created')
            callback(sId)
        })
    }
    async DeleteSource (userId, sourceId) {
        QueryToMySql(`DELETE FROM \`data-sources\` WHERE \`id\`=${sourceId} AND \`user_id\`=${userId}`, function (res) {
            console.log('deleted')
        })
    }
}

class DataSource_source extends DataSource_source_sql{
    async createDataSource(data, callback){
        // sql then fs
        try {
            await DataSource_source_sql.prototype.CreateSource(
                data.user_id,
                data.source_name,
                data.source_type,
                data.source_api_key, async function (id) {
                    //? no error ? go try fs
                    try {
                        await fs.mkdir(`${getPathOfStorage()}/${data.user_id}/${id}`, {recursive: true},
                            function (err) {
                            if (err)
                                console.log(err)
                        })
                        callback(true)
                    } catch (e) {
                        await DataSource_source_sql.prototype.DeleteSource(data.user_id, id)
                        callback(false)
                    }
                })
        }catch (e) {
            callback(false)
        }
    }
    async deleteDataSource (data, callback){
        let userId = data.user_id, sourceId = data.source_id;
        try {
            await DataSource_source_sql.prototype.DeleteSource(userId, sourceId)
                .then(() => {
                    fs.rm(`${getPathOfStorage()}/${userId}/${sourceId}`,function () {
                        callback(true)
                    })
                })
        }catch (e) {
            callback(false)
        }
    }
}
module.exports = DataSource_source.prototype