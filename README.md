# Yukuuri 合成器
油库里合成器，使用AquesTalkPi！ 
请在A-quest许可范围内使用本程序  
## Install
附: 如果无法执行aquesTalkPi请在容器内执行
```bash
wget -qO- https://raw.githubusercontent.com/noraworld/aquestalk-installer/master/bin/pi | sh
git clone https://github.com/Love-Kogasa/Yukuuri && cd Yukuuri
npm install --no-bin-links
PORT=1145 && node index
# 默认端口3000
```
启动服务器后访问指定端口即可
## 页面API
启动服务器后，(GET)访问PORT下的yukuuri.wav
### 参数列表
* t: 输入文本
* v: 音声，只能是f1或f2，详见 `~/aquestalkpi/AquesTalkPi -h`
* zh: 中文标准，必须为数字，详见 https://www.ltool.net/chinese-simplified-and-traditional-characters-pinyin-to-katakana-converter-in-simplified-chinese.php