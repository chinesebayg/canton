// 加载扩展的粤拼词典
// 这里我们需要引入生成的词典文件

function convertToJyutping() {
    const inputText = document.getElementById('inputText').value;
    const outputElement = document.getElementById('outputText');
    
    if (!inputText.trim()) {
        outputElement.textContent = '';
        return;
    }
    
    // 第一步：将简体字转换为繁体字
    const traditionalText = convertToTraditional(inputText);
    
    let result = '';
    let i = 0;
    
    // 第二步：优化算法：优先匹配长词汇
    while (i < traditionalText.length) {
        let matched = false;
        
        // 从最长可能的词汇开始匹配（最多6个字符）
        for (let len = Math.min(6, traditionalText.length - i); len >= 1; len--) {
            const substring = traditionalText.substring(i, i + len);
            
            if (jyutpingDict[substring]) {
                result += jyutpingDict[substring] + ' ';
                i += len;
                matched = true;
                break;
            }
        }
        
        // 如果没有匹配到，保留原字符
        if (!matched) {
            result += traditionalText[i] + ' ';
            i++;
        }
    }
    
    outputElement.textContent = result.trim();
}