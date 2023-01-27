import { InfluxDB } from "@influxdata/influxdb-client";


const token = "M6lZJYgygHhLfcWJSK6EQbkyFFK6mUQ1OPmbBgBI7inUhk52olVI4iVf8JVn7L8TPDEpKYwzZJ6RCWdnizQmjw=="
const org = "abba";
const bucket = "default";
const url = "http://82.115.18.68:8068";


export default  async function influxQuery(t="0x55d398326f99059ff775485246999027b3197955") {
	const query = `from(bucket: "${bucket}")
		|> range(start: -24h)
		|> filter(fn: (r) => r["_measurement"] == "transfer")
		|> filter(fn: (r) => r["token"] == "${t}")
		`
	const res:{[key:string]:{
			token:string
			symbol:string
			name:string
			to:string
			from:string
			tokenValue:string
			otherSymbolName:string
			amount:string
		}|any}={}

    const queryApi = await new InfluxDB({ url, token ,transportOptions: {rejectUnauthorized: false}}).getQueryApi(org);
    await queryApi.queryRows(query, {
        next(row, tableMeta) {
            const o = tableMeta.toObject(row);
			const item=res[o._time] || {}
			item[o._field]=o._value
			res[o._time]=item
        },
        complete() {
			
			
			
		},
        error(error:Error) {
			console.log("query failed- ", error)
        }
    });
	console.log('res is' , res)
	return res
};


