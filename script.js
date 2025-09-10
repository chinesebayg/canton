// 简化的中文到粤拼映射（可扩展）
const jyutpingDict = {
  "你": "nei5",
  "好": "hou2",
  "嗎": "maa3",
  "我": "ngo5",
  "是": "si6",
  "不": "bat1",
  "知道": "zi1 dou3"
};

function convertToJyutping() {
  const input = document.getElementById("inputText").value.trim();
  let output = "";

  for (let char of input) {
    output += jyutpingDict[char] ? jyutpingDict[char] + " " : char + " ";
  }

  document.getElementById("outputText").innerText = output.trim();
}