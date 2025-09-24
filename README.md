# 中文转粤拼工具 (Chinese to Jyutping Converter)

一个基于Web的中文汉字转粤语拼音工具，支持简体字自动转换。

## 🌟 功能特点

- **智能转换**：支持简体字自动转换为繁体字后再转粤拼
- **大词库**：包含超过6万个词条，覆盖常用中文词汇
- **优先匹配**：智能匹配长词汇，提高转换准确性
- **即时转换**：实时转换，无需等待
- **现代界面**：美观的用户界面，支持响应式设计

## 📖 关于粤拼

本工具采用香港语言学学会制定的粤语拼音方案（简称"粤拼"），该方案于1993年底定案，是目前最权威的粤语拼音标准。

参考资料：[香港语言学学会粤语拼音方案](https://lshk.org/jyutping-scheme/)

## 🚀 使用方法

1. 在输入框中输入中文文字（支持简体字和繁体字）
2. 点击"转换"按钮
3. 查看粤拼输出结果

## 💻 技术实现

- **前端**：HTML5 + CSS3 + JavaScript
- **转换流程**：简体字 → 繁体字 → 粤拼
- **词典来源**：基于大型粤语词汇数据库
- **算法优化**：优先匹配长词汇，提高准确性

## 📁 项目结构

```
├── index.html                    # 主页面
├── style.css                     # 样式文件
├── script.js                     # 主要逻辑
├── simplified-to-traditional.js  # 简繁转换词典
├── jyutping-dict-expanded.js     # 扩展粤拼词典
└── parse-wordslist.js            # 词典生成脚本
```

## 🎯 转换示例

- **简体字**：`我爱你` → `ngo5 oi3 nei5`
- **繁体字**：`我愛你` → `ngo5 oi3 nei5`
- **粤语词汇**：`粤语` → `jyut6 jyu5`
- **混合文本**：`我爱香港` → `ngo5 oi3 hoeng1 gong2`

## 🔧 本地运行

1. 克隆项目到本地
2. 在项目目录下启动HTTP服务器：
   ```bash
   python -m http.server 8000
   ```
3. 在浏览器中访问 `http://localhost:8000`

## 📝 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！
jyutping-dict-expanded.js created with Trae.ai IDE from https://words.hk/faiman/analysis/wordslist/?utm_source=chatgpt.com
---

**Learn Cantonese With Jyutping** 🇭🇰
