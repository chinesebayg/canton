// 加载扩展的粤拼词典
// 这里我们需要引入生成的词典文件

// 全局变量控制汉字显示位置
let isCharacterBelow = false;

function convertToJyutping() {
    const inputText = document.getElementById('inputText').value;
    const outputElement = document.getElementById('outputText');
    
    if (!inputText.trim()) {
        outputElement.innerHTML = '';
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
                const jyutping = jyutpingDict[substring];
                
                // 根据当前模式生成HTML
                if (isCharacterBelow) {
                    result += `<span class="char-below"><span class="jyutping">${jyutping}</span><span class="character">${substring}</span></span> `;
                } else {
                    result += `<span class="char-above"><span class="character">${substring}</span><span class="jyutping">${jyutping}</span></span> `;
                }
                
                i += len;
                matched = true;
                break;
            }
        }
        
        // 如果没有匹配到，保留原字符
        if (!matched) {
            if (isCharacterBelow) {
                result += `<span class="char-below"><span class="jyutping"></span><span class="character">${traditionalText[i]}</span></span> `;
            } else {
                result += `<span class="char-above"><span class="character">${traditionalText[i]}</span><span class="jyutping"></span></span> `;
            }
            i++;
        }
    }
    
    outputElement.innerHTML = result.trim();
}

function toggleCharacterPosition() {
    isCharacterBelow = !isCharacterBelow;
    const toggleButton = document.getElementById('toggleButton');
    
    if (isCharacterBelow) {
        toggleButton.textContent = '汉字在粤拼上面';
        document.body.classList.add('char-below-mode');
    } else {
        toggleButton.textContent = '汉字在粤拼底下';
        document.body.classList.remove('char-below-mode');
    }
    
    // 如果有输出内容，重新转换以应用新的显示模式
    const inputText = document.getElementById('inputText').value;
    if (inputText.trim()) {
        convertToJyutping();
    }
}