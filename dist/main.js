const qqMusic=require('qq-music-api')
const express = require('express');
const app = express();

qqMusic.setCookie('RK=isLYKCA+OP; ptcz=94f7847179fd1bca580c42cfa68618ffe440f9fbb19eaecfd4f213125c0dbb50; pgv_pvid=134325430; eas_sid=81K6Q4F045T0I1D0P1Z850z681; fqm_pvqid=26e4ef3f-f5e7-415e-9f1c-a4fb50bc51db; ts_refer=cn.bing.com/; ts_uid=522381415; euin=oKcz7wnloevP7n**; tmeLoginType=2; fqm_sessionid=1ce8e579-4b62-45bf-b49d-026daef3222c; pgv_info=ssid=s7280080050; ts_last=y.qq.com/; _qpsvr_localtk=0.1415905002914013; login_type=1; wxunionid=; psrf_qqrefresh_token=924F98BE100E42413C066DCE5F1A399C; wxrefresh_token=; qm_keyst=Q_H_L_2eauB760eWEuOEKEXOQD6-svpHM0ty9ZjrTRuzgY21IJnfXb5kKkJl-HKM-gT20; wxopenid=; psrf_qqunionid=3189322972AA96B94E88FAFA8083D836; psrf_access_token_expiresAt=1648527690; qm_keyst=Q_H_L_2eauB760eWEuOEKEXOQD6-svpHM0ty9ZjrTRuzgY21IJnfXb5kKkJl-HKM-gT20; psrf_qqopenid=EB21018EF55B7FE610B0EE5C66E91875; psrf_qqaccess_token=E419E7FFD86A65EE52028B33ACFAF4F1; qqmusic_key=Q_H_L_2eauB760eWEuOEKEXOQD6-svpHM0ty9ZjrTRuzgY21IJnfXb5kKkJl-HKM-gT20; uin=1806070444; psrf_musickey_createtime=1640751690');

app.get('/',(req,resd)=>{
  
  qqMusic.api(req.query.type,{id:req.query.id,
    key:req.query.key,
    songmid:req.query.songmid,
    data:req.query.data})
  .then(res => resd.send(res))
  .catch(err => resd.send(err))
  // console.log(req.query)
})

app.listen(8080, () => {
  console.log('示例应用正在监听 8080 端口!');
});



//004AxmlM3YihD2
//# sourceMappingURL=main.js.map