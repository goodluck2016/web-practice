// 命运水晶球的答案库
const answers = [
    "是的，这将是一个明智的选择。",
    "现在可能不是最佳时机。",
    "你的直觉是正确的，继续前进。",
    "前方有挑战，但你能够克服。",
    "保持耐心，答案即将揭晓。",
    "相信自己，你已经知道答案。",
    "这个决定需要更多思考。",
    "机会之门正在为你打开。",
    "专注于当下，未来自然清晰。",
    "积极的态度会带来积极的结果。",
    "不要急于下结论，等待更多信息。",
    "你的努力很快就会得到回报。",
    "有时候，放弃也是一种智慧。",
    "新的机遇正在悄然接近你。",
    "保持开放的心态，接纳新的可能性。",
    "这个问题的答案将在梦中出现。",
    "跟随你的内心，它不会误导你。",
    "现在采取行动，不要犹豫。",
    "你需要更多的准备和计划。",
    "成功就在不远处，继续前进。",
    "这个问题的答案是肯定的。",
    "暂时放下这个问题，稍后再考虑。",
    "你的创造力将引领你找到解决方案。",
    "与信任的朋友交流，他们会给你启发。",
    "现在不是做出重大改变的时候。",
    "耐心等待，好消息即将到来。",
    "这个选择将为你带来新的开始。",
    "相信宇宙的安排，一切自有定数。",
    "你已经拥有了解决问题的能力。",
    "保持乐观，困难只是暂时的。"
];

// DOM元素
const askButton = document.getElementById('ask-button');
const answerText = document.getElementById('answer-text');
const crystalBall = document.querySelector('.crystal-ball');

// 点击按钮时的处理函数
askButton.addEventListener('click', function() {
    // 添加水晶球抖动动画
    crystalBall.classList.add('shake');
    
    // 清空当前答案
    answerText.textContent = "水晶球正在思考...";
    answerText.style.opacity = "0.6";
    
    // 禁用按钮防止重复点击
    askButton.disabled = true;
    askButton.style.opacity = "0.7";
    askButton.style.cursor = "not-allowed";
    
    // 短暂延迟后显示新答案，增强神秘感
    setTimeout(function() {
        // 随机选择一个答案
        const randomIndex = Math.floor(Math.random() * answers.length);
        const selectedAnswer = answers[randomIndex];
        
        // 显示答案
        answerText.textContent = selectedAnswer;
        answerText.style.opacity = "1";
        
        // 添加答案出现动画
        answerText.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        
        // 移除水晶球抖动动画
        setTimeout(function() {
            crystalBall.classList.remove('shake');
        }, 500);
        
        // 重新启用按钮
        setTimeout(function() {
            askButton.disabled = false;
            askButton.style.opacity = "1";
            askButton.style.cursor = "pointer";
        }, 1000);
    }, 1500);
});

// 添加水晶球悬停效果
crystalBall.addEventListener('mouseenter', function() {
    crystalBall.style.animationDuration = "3s";
    crystalBall.style.transform = "scale(1.03)";
});

crystalBall.addEventListener('mouseleave', function() {
    crystalBall.style.animationDuration = "4s";
    crystalBall.style.transform = "scale(1)";
});

// 为水晶球本身也添加点击事件
crystalBall.addEventListener('click', function() {
    // 触发按钮的点击事件
    askButton.click();
});

// 页面加载时的动画效果
window.addEventListener('load', function() {
    // 标题淡入效果
    const title = document.querySelector('.title');
    title.style.opacity = "0";
    title.style.transition = "opacity 1s ease";
    
    setTimeout(function() {
        title.style.opacity = "1";
    }, 300);
    
    // 水晶球淡入效果
    crystalBall.style.opacity = "0";
    crystalBall.style.transition = "opacity 1.5s ease";
    
    setTimeout(function() {
        crystalBall.style.opacity = "1";
    }, 800);
    
    // 按钮淡入效果
    askButton.style.opacity = "0";
    askButton.style.transition = "opacity 1s ease";
    
    setTimeout(function() {
        askButton.style.opacity = "1";
    }, 1300);
});