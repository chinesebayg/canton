// 解析wordslist.json并生成JavaScript词典的脚本
const fs = require('fs');

// 读取wordslist.json文件
const rawData = fs.readFileSync('wordslist.json', 'utf8');
const wordsData = JSON.parse(rawData);

// 创建新的词典对象
const jyutpingDict = {};

// 统计信息
let totalEntries = 0;
let chineseEntries = 0;
let englishEntries = 0;
let symbolEntries = 0;

// 处理每个词条
for (const [word, pronunciations] of Object.entries(wordsData)) {
    totalEntries++;
    
    // 检查是否包含中文字符
    const hasChinese = /[\u4e00-\u9fff]/.test(word);
    
    if (hasChinese) {
        chineseEntries++;
        // 对于中文词汇，使用第一个发音（通常是最常用的）
        jyutpingDict[word] = pronunciations[0];
    } else if (/^[a-zA-Z]/.test(word)) {
        englishEntries++;
        // 对于英文词汇，也保留第一个发音
        jyutpingDict[word] = pronunciations[0];
    } else {
        symbolEntries++;
        // 对于符号和数字，保留第一个发音
        jyutpingDict[word] = pronunciations[0];
    }
}

// 生成JavaScript文件内容
const jsContent = `// 粤拼词典 - 从wordslist.json生成
// 总词条数: ${totalEntries}
// 中文词条: ${chineseEntries}
// 英文词条: ${englishEntries}
// 符号数字: ${symbolEntries}

const jyutpingDict = ${JSON.stringify(jyutpingDict, null, 2)};

// 导出词典（如果在Node.js环境中）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jyutpingDict;
}
`;

// 写入新的词典文件
fs.writeFileSync('jyutping-dict-expanded.js', jsContent, 'utf8');

console.log('词典生成完成！');
console.log(`总词条数: ${totalEntries}`);
console.log(`中文词条: ${chineseEntries}`);
console.log(`英文词条: ${englishEntries}`);
console.log(`符号数字: ${symbolEntries}`);
console.log('文件已保存为: jyutping-dict-expanded.js');