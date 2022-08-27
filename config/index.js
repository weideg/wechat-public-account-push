export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx7f07f7be96c3eb78",
    // 公众号appSecret
    appSecret: "997534f4e4a18dcf5207a97098e13fe1",
    // 模板消息id
    templateId: "GKa42SxvUZzj4M_Mn2vqLc5q-CQJGcY5XoHgBrCFuS4",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["ofiLL6eTOVbLEAi1tpFMZKVTZulg","ofiLL6XujBYJyJ7XfIQzREa5nLc4"],
     
    // 信息配置
    // 所在省份
    province: "河北",
    // 所在城市
    city: "张家口",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "烨烨", "year": "2001", "date": "05-24", "type": 'new'},
      {"name": "浩浩", "year": "2002", "date": "03-29", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2020-05-31",
   
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
