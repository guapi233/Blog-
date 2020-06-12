<template>
  <div class="detail-container">
    <div class="detail-wrap">
      <div class="detail-left">
        <div class="back">
          <img @click="backHome" src="../assets/img/back.svg" class="back-to-home" alt />
        </div>
        <div class="content">
          <h1 id="第-5-章-策略模式">第 5 章 策略模式</h1>
          <p class="createtime">2020-08-10</p>
          <p>在现实生活中，很多时候有多种途径到达同一个目的地。比如我们要去某个地方旅游，可以根据具体的实际情况来选择出行的线路：</p>
          <ul>
            <li>如果没有钱但是不在乎钱，可以选择坐飞机；</li>
            <li>如果没有钱，可以选择坐大巴或者火车；</li>
            <li>如果再穷一点，可以选择骑自行车</li>
          </ul>
          <p>策略模式的定义是：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。</p>
          <h2 id="50-预览">5.0 预览</h2>
          <p>本章是本书正式介绍的第二个设计模式，策略模式常常使用于同一目标不同执行过程的场景，使用其可以有效的规避大量的if-else语句。</p>
          <h2 id="51-使用策略模式计算奖金">5.1 使用策略模式计算奖金</h2>
          <p>很多公司的年终奖是根据员工的工资基数和年底绩效情况来发的。例如，绩效为S的人年终奖有4倍工资，绩效为A的人年终奖有3倍工资，而绩效为B的人年终奖是2倍工资。假设财务部要求我们提供一段代码，来方便他们计算员工的年终奖。</p>
          <p>
            <strong>1. 最初的代码实现</strong>
          </p>
          <pre><code class="language-js"><span class="hljs-keyword">var</span> calculateBonus = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">(performanceLevel, salary)</span> </span>{
    <span class="hljs-keyword">if</span> (performanceLevel === <span class="hljs-string">"S"</span>) {
        <span class="hljs-keyword">return</span> salary * <span class="hljs-number">4</span>;
    }

    <span class="hljs-keyword">if</span> (performanceLevel === <span class="hljs-string">"A"</span>) {
        <span class="hljs-keyword">return</span> salary * <span class="hljs-number">3</span>;
    }

    <span class="hljs-keyword">if</span> (performanceLevel === <span class="hljs-string">"B"</span>) {
        <span class="hljs-keyword">return</span> salary * <span class="hljs-number">2</span>;
    }
}</code></pre>
          <p>缺点：</p>
          <ul>
            <li>
              <code>calculateBonus</code>函数比较庞大，包含了很多if-else语句；
            </li>
            <li>缺乏弹性；</li>
            <li>算法的复用性差</li>
          </ul>
          <p>
            <strong>2. 使用组合函数重构代码</strong>
          </p>
          <pre><code class="language-js"><span class="hljs-keyword">var</span> performanceS = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">(salary)</span> </span>{
    <span class="hljs-keyword">return</span> salary * <span class="hljs-number">4</span>;
}

<span class="hljs-keyword">var</span> performanceA = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">(salary)</span> </span>{
    <span class="hljs-keyword">return</span> salary * <span class="hljs-number">3</span>;
}

<span class="hljs-keyword">var</span> calculateBonus = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">(performanceLevel, salary)</span> </span>{
    <span class="hljs-keyword">if</span> (performanceLevel === <span class="hljs-string">"S"</span>) {
        <span class="hljs-keyword">return</span> performanceS(salary);
    }

    <span class="hljs-keyword">if</span> (performanceLevel === <span class="hljs-string">"A"</span>) {
        <span class="hljs-keyword">return</span> performanceA(salary);
    }
}</code></pre>
          <p>
            <strong>3. 使用策略模式重构代码</strong>
          </p>
          <p>策略模式指的是定义一系列的算法，把它们一个个封装起来。将不变的部分和变化的部分隔开是每个设计模式的主题，策略模式也不例外，策略模式的目的就是将算法的使用与算法的实现分离开来。</p>
          <p>一个基于策略模式的程序至少由两部分组成。第一个部分是一组策略类，策略类封装了具体算法，并负责具体的计算过程。第二个部分是环境类Context，Context接受客户的请求，随后把请求委托给某一个策略类。要做到这点，说明Context中维持对某个策略对象的引用。</p>
          <pre><code class="language-js"><span class="hljs-keyword">var</span> performanceS = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{};

performanceS.prototype.calculate = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">salary</span>) </span>{
    <span class="hljs-keyword">return</span> salary * <span class="hljs-number">4</span>;
}

<span class="hljs-keyword">var</span> performanceA = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{};

performanceA.prototype.calculate = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">salary</span>) </span>{
    <span class="hljs-keyword">return</span> salary * <span class="hljs-number">3</span>;
}

<span class="hljs-comment">// 奖金类Bonus</span>
<span class="hljs-keyword">var</span> Bonus = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">this</span>.salary = <span class="hljs-literal">null</span>; <span class="hljs-comment">// 原始工资</span>
    <span class="hljs-keyword">this</span>.strategy = <span class="hljs-literal">null</span>; <span class="hljs-comment">// 绩效等级对应的策略对象</span>
}

Bonus.prototype.setSalary = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">salary</span>) </span>{
    <span class="hljs-keyword">this</span>.salary = salary;
}

Bonus.prototype.setStrategy = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">strategy</span>) </span>{
    <span class="hljs-keyword">this</span>.strategy = strategy;
}

Bonus.prototype.getBonus = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">if</span> (!<span class="hljs-keyword">this</span>.strategy) {
        <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">"未设置strategy属性"</span>);
    }

    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.strategy.calculate(<span class="hljs-keyword">this</span>.salary);
}
</code></pre>
          <p>使用上面的代码：</p>
          <pre><code class="language-js">var bonus = <span class="hljs-keyword">new</span> <span class="hljs-constructor">Bonus()</span>;

bonus.set<span class="hljs-constructor">Salay(1000)</span>;
bonus.set<span class="hljs-constructor">Strategy(<span class="hljs-params">new</span> <span class="hljs-params">performanceS</span>()</span>); <span class="hljs-comment">// 设置策略对象</span></code></pre>
          <h2 id="52-javascript版本的策略模式">5.2 JavaScript版本的策略模式</h2>
          <p>上面的版本是模仿传统静态语言的实现方式，在js中，实现更加简单：</p>
          <pre><code class="language-js"><span class="hljs-keyword">var</span> strategies = {
    <span class="hljs-string">"S"</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">salary</span>) </span>{
        <span class="hljs-keyword">return</span> salary * <span class="hljs-number">4</span>;
    },
    <span class="hljs-string">"A"</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">salary</span>) </span>{
        <span class="hljs-keyword">return</span> salary * <span class="hljs-number">3</span>;
    }
};

<span class="hljs-keyword">var</span> calculateBonus = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">level, salary</span>) </span>{
    <span class="hljs-keyword">return</span> strategies[level](salary);
}

<span class="hljs-built_in">console</span>.log(calculateBonus(<span class="hljs-string">"S"</span>, <span class="hljs-number">20000</span>)); <span class="hljs-comment">// 80000</span></code></pre>
          <h2 id="53-多态在策略模式中的体现">5.3 多态在策略模式中的体现</h2>
          <p>每个策略对象负责的算法已被各自封装在对象内部。当我们对这些策略对象发出请求时，它们会返回不同的计算结果，这正是对象多态性的体现。</p>
          <p>『它们可以互相替换』替换 context 中当前保存的策略对象，便能执行不同的算法来得到我们想要的结果。</p>
          <h2 id="54-使用策略模式实现缓动动画">5.4 使用策略模式实现缓动动画</h2>
          <h2 id="541-实现动画效果的原理">5.4.1 实现动画效果的原理</h2>
          <p>更换div的位置以及背景定位。</p>
          <h3 id="542-思路和一些准备工作">5.4.2 思路和一些准备工作</h3>
          <ul>
            <li>动画开始时，小球所在的原始位置；</li>
            <li>小球移动的目标位置；</li>
            <li>动画开始时的精确时间点；</li>
            <li>小球运动持续的时间。</li>
          </ul>
          <p>
            随后，我们会用
            <code>setInterval</code>创建一个定时器，在定时器的每一帧里，我们会把动画已消耗的时间、小球原始位置、小球目标位置和动画持续的总时间等信息传入缓动算法。该算法会通过这几个参数，计算出小球当前应该所在的位置。最后再更新div对应的CSS属性。
          </p>
          <h3 id="543-让小球运动起来">5.4.3 让小球运动起来</h3>
          <p>下面是一些源自于Flash的缓动算法：</p>
          <pre><code class="language-js">var tween = {
    linear: <span class="hljs-keyword">function</span> <span class="hljs-title"></span>(t, b, c, d) {
        <span class="hljs-keyword">return</span> <span class="hljs-type">c</span> * t / d + b;
    },
    easeIn: <span class="hljs-keyword">function</span> <span class="hljs-title"></span>(t, b, c, d) {
        <span class="hljs-keyword">return</span> <span class="hljs-type">c</span> * (t /= d) * t + b;
    },
    strongEaseIn: <span class="hljs-keyword">function</span> <span class="hljs-title"></span>(t, b, c, d) {
        <span class="hljs-keyword">return</span> <span class="hljs-type">c</span> * (t /= d) * t * t * t * t + b;
    },
    strongEaseOut: <span class="hljs-keyword">function</span> <span class="hljs-title"></span>(t, b, c, d) {
        <span class="hljs-keyword">return</span> <span class="hljs-type">c</span> * ((t = t / d - <span class="hljs-number">1</span>) * t * t * t * t + <span class="hljs-number">1</span>) + b;
    },
    sineaseIn: <span class="hljs-keyword">function</span> <span class="hljs-title"></span>(t, b, c, d) {
        <span class="hljs-keyword">return</span> <span class="hljs-type">c</span> * (t /= d) * t * t + b;
    },
    sineaseOut: <span class="hljs-keyword">function</span> <span class="hljs-title"></span>(t, b, c, d) {
        <span class="hljs-keyword">return</span> <span class="hljs-type">c</span> * ((t = t / d - <span class="hljs-number">1</span>) * t * t + <span class="hljs-number">1</span>) + b;
    }
}</code></pre>
          <p>下面开始编写完整代码，思想来自于jQuery库，由于本节的目标是演示策略模式，而非编写一个完整的动画库，因此省去了动画的队列控制等更多完整功能。</p>
          <p>首先在页面中放置一个div：</p>
          <pre><code class="language-html">&lt;body&gt;
    &lt;<span class="hljs-keyword">div</span> style=<span class="hljs-string">"position:absolute;background:blue;width:100px;height:100px"</span> <span class="hljs-built_in">id</span>=<span class="hljs-string">"div"</span>&gt;
           我是<span class="hljs-keyword">div</span>
    &lt;/<span class="hljs-keyword">div</span>&gt;
&lt;/body&gt;</code></pre>
          <p>
            接下来定义
            <code>Animate</code>类，其构造函数接收一个参数：即将运动起来的DOM节点：
          </p>
          <pre><code class="language-js"><span class="hljs-keyword">var</span> Animate = function (dom) {
    <span class="hljs-keyword">this</span>.dom = dom;                    <span class="hljs-comment">// 进行运动的dom节点</span>
    <span class="hljs-keyword">this</span>.startTime = <span class="hljs-number">0</span>;                <span class="hljs-comment">// 动画开始时间</span>
    <span class="hljs-keyword">this</span>.startPos = <span class="hljs-number">0</span>;                <span class="hljs-comment">// 动画开始时，dom节点的位置，即dom的初始位置</span>
    <span class="hljs-keyword">this</span>.endPos = <span class="hljs-number">0</span>;                <span class="hljs-comment">// 动画结束时，dom节点的位置，即dom的目标位置</span>
    <span class="hljs-keyword">this</span>.propertyName = <span class="hljs-literal">null</span>;        <span class="hljs-comment">// dom节点需要被改变的css属性名</span>
    <span class="hljs-keyword">this</span>.easing = <span class="hljs-literal">null</span>;                <span class="hljs-comment">// 缓动算法</span>
    <span class="hljs-keyword">this</span>.duration = <span class="hljs-literal">null</span>;            <span class="hljs-comment">// 动画持续时间</span>
}</code></pre>
          <p>
            接下来
            <code>Animate.prototype.start</code>方法负责启动这个动画，在动画被启动的瞬间，要记录一些信息，共缓动算法在以后计算小球当前位置的时候使用。在记录完这些信息之后，此方法还要负责启动定时器。
          </p>
          <pre><code class="language-js">Animate.prototype.start = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">propertyName, endPos, duration, easing</span>) </span>{
    <span class="hljs-keyword">this</span>.startTime = +<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>; <span class="hljs-comment">// 动画启动时间</span>
    <span class="hljs-keyword">this</span>.startPos = <span class="hljs-keyword">this</span>.dom.getBoundingClientRect()[propertyName]; <span class="hljs-comment">// dom节点初始值</span>
    <span class="hljs-keyword">this</span>.propertyName = propertyName; <span class="hljs-comment">// dom节点需要被改变的CSS属性名</span>
    <span class="hljs-keyword">this</span>.endPos = endPos; <span class="hljs-comment">// dom节点目标位置</span>
    <span class="hljs-keyword">this</span>.duration = duration; <span class="hljs-comment">// 动画持续时间</span>
    <span class="hljs-keyword">this</span>.easing = tween[easing]; <span class="hljs-comment">// 选择策略对象中的缓动算法</span>

    <span class="hljs-keyword">var</span> self = <span class="hljs-keyword">this</span>;
    <span class="hljs-keyword">var</span> timeId = setInterval(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">if</span> (self.step() === <span class="hljs-literal">false</span>) {
            clearInterval(timeId);
        }
    }, <span class="hljs-number">19</span>);
}</code></pre>
          <p>
            <code>Animate.prototype.start</code>方法接收一下4个参数：
          </p>
          <ul>
            <li>propertyName：要改变的CSS属性名，比如&quot;left&quot;，&quot;top&quot;；</li>
            <li>endPos：小球运动的目标位置；</li>
            <li>duration：动画持续时间；</li>
            <li>easing：缓动算法。</li>
          </ul>
          <p>
            再接下来是
            <code>Animate.prototype.step</code>方法，该方法代表小球运动的每一帧要做得事。在此处，该方法负责计算小球的当前位置和调用更新CSS属性值的方法
            <code>Animate.prototype.update</code>。
          </p>
          <pre><code class="language-JS">Animate.prototype.step = function () {
    <span class="hljs-keyword">var</span> t = +new Date; <span class="hljs-comment">// 取得当前时间</span>
    <span class="hljs-keyword">if</span> (t &gt;= <span class="hljs-keyword">this</span>.startTime + <span class="hljs-keyword">this</span>.duration) { <span class="hljs-comment">// (1)</span>
        <span class="hljs-keyword">this</span>.update(<span class="hljs-keyword">this</span>.endPos); <span class="hljs-comment">// 更新小球的CSS属性</span>

        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
    }

    <span class="hljs-keyword">var</span> pos = <span class="hljs-keyword">this</span>.easing(t - <span class="hljs-keyword">this</span>.startTime, <span class="hljs-keyword">this</span>.startPos,
                          <span class="hljs-keyword">this</span>.endPos - <span class="hljs-keyword">this</span>.startPos, <span class="hljs-keyword">this</span>.duration);

    <span class="hljs-comment">// pos为小球当前位置</span>
    <span class="hljs-keyword">this</span>.update(pos); <span class="hljs-comment">// 更新小球的CSS属性值</span>
}</code></pre>
          <p>
            (1)处的意思是，如果当前时间大于动画开始时间加上动画持续时间之和，说明动画已经结束，此时要修正小球的位置。因为在这一帧开始之后，小球的位置已经接近了目标位置，但很可能不完全等于目标位置。此时我们要主动修正小球的当前位置为最终的目标位置。此外让
            <code>Animate.prototype.step</code>方法返回false，可以通知
            <code>Animate.prototype.start</code>方法清除定时器。
          </p>
          <p>
            最后负责更新小球CSS属性值的
            <code>Animate.prototype.update</code>方法：
          </p>
          <pre><code class="language-js">Animate.prototype.update = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">(pos)</span> </span>{
    <span class="hljs-keyword">this</span>.dom.style[<span class="hljs-keyword">this</span>.propertyName] = pos + <span class="hljs-string">"px"</span>;
};</code></pre>
          <p>下面是测试代码：</p>
          <pre><code class="language-js"><span class="hljs-keyword">var</span> <span class="hljs-keyword">div</span> = document.getElementById(<span class="hljs-string">"div"</span>);
<span class="hljs-keyword">var</span> animate = new Animate(<span class="hljs-keyword">div</span>);

animate.start(<span class="hljs-string">"left"</span>, <span class="hljs-number">500</span>, <span class="hljs-number">1000</span>, <span class="hljs-string">"strongEaseOut"</span>);</code></pre>
          <h2 id="55-更广义的算法">5.5 更广义的”算法“</h2>
          <p>从定义上看，策略模式就是用来封装算法的。但如果把策略模式仅仅用来封装算法未免有一点大材小用。在实际开发中，我们通常会把算法的含义扩散开来，使策略模式也可以用来封装一系列的“业务规则”。只要这些业务规则指向的目标一致，并且可以被替换使用，我们就可以用策略模式来封装它们。</p>
          <p>GoF在《设计模式》一书中提到了一个利用策略模式来效验用户是否输入了合法数据的例子，但GoF未给出具体的实现。刚好在Web开发中，表单校验是一个非常常见的话题。</p>
          <h2 id="56-表单校验">5.6 表单校验</h2>
          <p>假设我们正在编写一个注册的页面，点击注册按钮之前，有如下几条校验逻辑：</p>
          <ul>
            <li>用户名不能为空；</li>
            <li>密码长度不能少于6位；</li>
            <li>手机号码必须符合格式。</li>
          </ul>
          <h3 id="561-表单校验的第一个版本">5.6.1 表单校验的第一个版本</h3>
          <p>目前没有引入策略模式：</p>
          <pre><code class="language-js"><span class="hljs-keyword">var</span> registerForm = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"registerForm"</span>);

registerForm.onsubmit = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">if</span> (registerForm.userName.value === <span class="hljs-string">""</span>) {
        alert(<span class="hljs-string">"用户名不能为空"</span>);

        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
    }

    <span class="hljs-keyword">if</span> (registerForm.password.value.length &lt; <span class="hljs-number">6</span>) {
        alert(<span class="hljs-string">"密码长度不能少于6位"</span>);

        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
    }

    <span class="hljs-keyword">if</span> (!<span class="hljs-regexp">/(^1[358][0-9]{9}$)/</span>.test(registerForm.phoneNumber.value)) {
        alert(<span class="hljs-string">"手机号码格式不正确"</span>);

        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
    }
}</code></pre>
          <h3 id="562-用策略模式重构表单校验">5.6.2 用策略模式重构表单校验</h3>
          <pre><code class="language-JS"><span class="hljs-keyword">var</span> strategies = {
    <span class="hljs-attr">isNonEmpty</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">value, errorMsg</span>) </span>{ <span class="hljs-comment">// 不为空</span>
        <span class="hljs-keyword">if</span> (value === <span class="hljs-string">""</span>) {
            <span class="hljs-keyword">return</span> errorMsg;
        }
    },
    <span class="hljs-attr">minLength</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">value, length, errorMsg</span>) </span>{ <span class="hljs-comment">// 限制最小长度</span>
        <span class="hljs-keyword">if</span> (value.length &lt; length) {
            <span class="hljs-keyword">return</span> errorMsg;
        }
    },
    <span class="hljs-attr">isMobile</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">value, errorMsg</span>) </span>{ <span class="hljs-comment">// 手机号码格式</span>
        <span class="hljs-keyword">if</span> (!<span class="hljs-regexp">/(^1[3578][0-9]{9}$)/</span>.test(value)) {
            <span class="hljs-keyword">return</span> errorMsg;
        }
    }
}</code></pre>
          <p>
            接下来实现
            <code>Validator</code>类，其在这里作为Context，负责接收用户的请求并委托给
            <code>strategies</code>对象，不过在此之前，有必要了解一下用户如何向
            <code>Validator</code>类发送请求的：
          </p>
          <pre><code class="language-js"><span class="hljs-keyword">var</span> validataFunc = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">var</span> validator = <span class="hljs-keyword">new</span> Validator();

    <span class="hljs-comment">// 添加校验规则</span>
    validator.add(registerForm.userName, <span class="hljs-string">"isNonEmpty"</span>, <span class="hljs-string">"用户名不能为空"</span>);
    validator.add(registerForm.password, <span class="hljs-string">"minLength:6"</span>, <span class="hljs-string">"密码长度不能少于6位"</span>); <span class="hljs-comment">// (1)</span>
    validator.add(registerForm.phoneNumber, <span class="hljs-string">"isMobile"</span>, <span class="hljs-string">"手机号码格式不正确"</span>);

    <span class="hljs-comment">// 获取校验结果</span>
    <span class="hljs-keyword">var</span> errorMsg = validator.start();

    <span class="hljs-keyword">return</span> errorMsg;
}

<span class="hljs-keyword">var</span> registerForm = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"registerForm"</span>);
<span class="hljs-built_in">console</span>.log(registerForm)

registerForm.onsubmit = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{

    <span class="hljs-keyword">var</span> errorMsg = validataFunc();

    <span class="hljs-keyword">if</span> (errorMsg) {
        alert(errorMsg);

        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>; <span class="hljs-comment">// 阻止表单提交</span>
    }
}</code></pre>
          <p>(1)处代码说明了：</p>
          <ul>
            <li>
              <code>registerForm.password</code>为参与校验的input输入框；
            </li>
            <li>&quot;minLength:6&quot;是一个以冒号隔开的字符串。冒号前代表客户挑选的strategy对象，冒号后面表示在校验过程所必须的一些参数；</li>
            <li>第3个参数是当校验未通过时返回的错误信息。</li>
          </ul>
          <p>
            最后是
            <code>Validator</code>类的实现：
          </p>
          <pre><code class="language-js"><span class="hljs-keyword">var</span> Validator = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span> </span>{
    <span class="hljs-keyword">this</span>.cache = []; <span class="hljs-comment">// 保存校验规则</span>
};

Validator.prototype.add = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">(dom, rule, errorMsg)</span> </span>{
    <span class="hljs-keyword">var</span> ary = rule.split(<span class="hljs-string">":"</span>); <span class="hljs-comment">// 把strategy和参数分开</span>

    <span class="hljs-keyword">this</span>.cache.push(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span> </span>{
        <span class="hljs-comment">// 把校验的步骤用空函数包装起来，并且放入cache</span>
        <span class="hljs-keyword">var</span> strategy = ary.shift(); <span class="hljs-comment">// 用户挑选的strategy</span>

        ary.unshift(dom.value); <span class="hljs-comment">// 把input的value添加进参数列表</span>
        ary.push(errorMsg); <span class="hljs-comment">// 把errorMsg添加进参数列表</span>

        <span class="hljs-keyword">return</span> strategies[strategy].apply(dom, ary); <span class="hljs-comment">// 调用策略对象中的检测方法，并返回结果</span>
    })
}

Validator.prototype.start = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span> </span>{
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>, validatorFunc; validatorFunc = <span class="hljs-keyword">this</span>.cache[i++];) {
        <span class="hljs-keyword">var</span> msg = validatorFunc(); <span class="hljs-comment">// 开始校验，并取得校验后的返回值</span>

        <span class="hljs-keyword">if</span> (msg) {
            <span class="hljs-keyword">return</span> msg;
        }
    }
};</code></pre>
          <p>全部代码：</p>
          <pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"registerForm"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"userName"</span>&gt;</span><span
  class="hljs-tag"
>&lt;<span class="hljs-name">br</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"password"</span>&gt;</span><span
  class="hljs-tag"
>&lt;<span class="hljs-name">br</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"phoneNumber"</span>&gt;</span><span
  class="hljs-tag"
>&lt;<span class="hljs-name">br</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">var</span> strategies = {
        <span class="hljs-attr">isNonEmpty</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">value, errorMsg</span>) </span>{ <span class="hljs-comment">// 不为空</span>
            <span class="hljs-keyword">if</span> (value === <span class="hljs-string">""</span>) {
                <span class="hljs-keyword">return</span> errorMsg;
            }
        },
        <span class="hljs-attr">minLength</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">value, length, errorMsg</span>) </span>{ <span class="hljs-comment">// 限制最小长度</span>
            <span class="hljs-keyword">if</span> (value.length &lt; length) {
                <span class="hljs-keyword">return</span> errorMsg;
            }
        },
        <span class="hljs-attr">isMobile</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">value, errorMsg</span>) </span>{ <span class="hljs-comment">// 手机号码格式</span>
            <span class="hljs-keyword">if</span> (!<span class="hljs-regexp">/(^1[3578][0-9]{9}$)/</span>.test(value)) {
                <span class="hljs-keyword">return</span> errorMsg;
            }
        }
    }

    <span class="hljs-keyword">var</span> Validator = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">this</span>.cache = []; <span class="hljs-comment">// 保存校验规则</span>
    };

    Validator.prototype.add = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">dom, rule, errorMsg</span>) </span>{
        <span class="hljs-keyword">var</span> ary = rule.split(<span class="hljs-string">":"</span>); <span class="hljs-comment">// 把strategy和参数分开</span>

        <span class="hljs-keyword">this</span>.cache.push(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
            <span class="hljs-comment">// 把校验的步骤用空函数包装起来，并且放入cache</span>
            <span class="hljs-keyword">var</span> strategy = ary.shift(); <span class="hljs-comment">// 用户挑选的strategy</span>

            ary.unshift(dom.value); <span class="hljs-comment">// 把input的value添加进参数列表</span>
            ary.push(errorMsg); <span class="hljs-comment">// 把errorMsg添加进参数列表</span>

            <span class="hljs-keyword">return</span> strategies[strategy].apply(dom, ary); <span class="hljs-comment">// 调用策略对象中的检测方法，并返回结果</span>
        })
    }

    Validator.prototype.start = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>, validatorFunc; validatorFunc = <span class="hljs-keyword">this</span>.cache[i++];) {
            <span class="hljs-keyword">var</span> msg = validatorFunc(); <span class="hljs-comment">// 开始校验，并取得校验后的返回值</span>

            <span class="hljs-keyword">if</span> (msg) {
                <span class="hljs-keyword">return</span> msg;
            }
        }
    };

    <span class="hljs-keyword">var</span> validataFunc = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">var</span> validator = <span class="hljs-keyword">new</span> Validator();

        <span class="hljs-comment">// 添加校验规则</span>
        validator.add(registerForm.userName, <span class="hljs-string">"isNonEmpty"</span>, <span class="hljs-string">"用户名不能为空"</span>);
        validator.add(registerForm.password, <span class="hljs-string">"minLength:6"</span>, <span class="hljs-string">"密码长度不能少于6位"</span>); <span class="hljs-comment">// (1)</span>
        validator.add(registerForm.phoneNumber, <span class="hljs-string">"isMobile"</span>, <span class="hljs-string">"手机号码格式不正确"</span>);

        <span class="hljs-comment">// 获取校验结果</span>
        <span class="hljs-keyword">var</span> errorMsg = validator.start();

        <span class="hljs-keyword">return</span> errorMsg;
    }

    <span class="hljs-keyword">var</span> registerForm = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"registerForm"</span>);
    <span class="hljs-built_in">console</span>.log(registerForm)

    registerForm.onsubmit = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{

        <span class="hljs-keyword">var</span> errorMsg = validataFunc();

        <span class="hljs-keyword">if</span> (errorMsg) {
            alert(errorMsg);

            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>; <span class="hljs-comment">// 阻止表单提交</span>
        }
    }
</span><span
  class="hljs-tag"
>&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span></code></pre>
          <h3 id="563-给某个文本输入框添加多种校验规则">5.6.3 给某个文本输入框添加多种校验规则</h3>
          <p>如果我们既想校验一个输入框是否为空，又想校验它输入文本的长度不小于10呢？</p>
          <p>可参考下面的代码</p>
          <pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"registerForm"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"userName"</span>&gt;</span><span
  class="hljs-tag"
>&lt;<span class="hljs-name">br</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-comment">/********************策略对象*************************/</span>
    <span class="hljs-keyword">var</span> strategies = {
        <span class="hljs-attr">isNonEmpty</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">value, errorMsg</span>) </span>{ <span class="hljs-comment">// 不为空</span>
            <span class="hljs-keyword">if</span> (value === <span class="hljs-string">""</span>) {
                <span class="hljs-keyword">return</span> errorMsg;
            }
        },
        <span class="hljs-attr">minLength</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">value, length, errorMsg</span>) </span>{ <span class="hljs-comment">// 限制最小长度</span>
            <span class="hljs-keyword">if</span> (value.length &lt; length) {
                <span class="hljs-keyword">return</span> errorMsg;
            }
        },
        <span class="hljs-attr">isMobile</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">value, errorMsg</span>) </span>{ <span class="hljs-comment">// 手机号码格式</span>
            <span class="hljs-keyword">if</span> (!<span class="hljs-regexp">/(^1[3578][0-9]{9}$)/</span>.test(value)) {
                <span class="hljs-keyword">return</span> errorMsg;
            }
        }
    }

    <span
  class="hljs-comment"
>/********************Validator类*************************/</span>
    <span class="hljs-keyword">var</span> Validator = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">this</span>.cache = []; <span class="hljs-comment">// 保存校验规则</span>
    };

    Validator.prototype.add = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">dom, rules</span>) </span>{
        <span class="hljs-keyword">var</span> self = <span class="hljs-keyword">this</span>;

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>, rule; rule = rules[i++];) {
            (<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">rule</span>) </span>{
                <span class="hljs-keyword">var</span> strategyAry = rule.strategy.split(<span class="hljs-string">":"</span>);
                <span class="hljs-keyword">var</span> errorMsg = rule.errorMsg;

                self.cache.push(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
                    <span class="hljs-keyword">var</span> strategy = strategyAry.shift();

                    strategyAry.unshift(dom.value);
                    strategyAry.push(errorMsg);

                    <span
  class="hljs-keyword"
>return</span> strategies[strategy].apply(dom, strategyAry);
                })
            })(rule)
        }
    }

    Validator.prototype.start = <span
  class="hljs-function"
><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>, validatorFunc; validatorFunc = <span class="hljs-keyword">this</span>.cache[i++];) {
            <span class="hljs-keyword">var</span> msg = validatorFunc(); <span class="hljs-comment">// 开始校验，并取得校验后的返回值</span>

            <span class="hljs-keyword">if</span> (msg) {
                <span class="hljs-keyword">return</span> msg;
            }
        }
    };

    <span
  class="hljs-comment"
>/********************客户调用代码*************************/</span>
    <span class="hljs-keyword">var</span> validataFunc = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">var</span> validator = <span class="hljs-keyword">new</span> Validator();

        <span class="hljs-comment">// 添加校验规则</span>
        validator.add(registerForm.userName, [{
            <span class="hljs-attr">strategy</span>: <span class="hljs-string">"isNonEmpty"</span>,
            <span class="hljs-attr">errorMsg</span>: <span class="hljs-string">"用户名不能为空"</span>
        },
        {
            <span class="hljs-attr">strategy</span>: <span class="hljs-string">"minLength:6"</span>,
            <span class="hljs-attr">errorMsg</span>: <span class="hljs-string">"用户名长度不能少于6位"</span>
        }]);

        <span class="hljs-comment">// 获取校验结果</span>
        <span class="hljs-keyword">var</span> errorMsg = validator.start();

        <span class="hljs-keyword">return</span> errorMsg;
    }

    <span class="hljs-keyword">var</span> registerForm = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"registerForm"</span>);

    registerForm.onsubmit = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{

        <span class="hljs-keyword">var</span> errorMsg = validataFunc();

        <span class="hljs-keyword">if</span> (errorMsg) {
            alert(errorMsg);

            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>; <span class="hljs-comment">// 阻止表单提交</span>
        }
    }
</span><span
  class="hljs-tag"
>&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span></code></pre>
          <h2 id="57-策略模式的优缺点">5.7 策略模式的优缺点</h2>
          <p>
            <strong>优点</strong>：
          </p>
          <ul>
            <li>策略模式利用组合、委托和多态等技术和思想，可以有效地避免多重条件选择语句；</li>
            <li>
              策略模式提供了对
              <a href="https://blog.csdn.net/allenliu6/article/details/53069625">开放—封闭原则</a>的完美支持，将算法封装在独立的strategy中，使得它们易于切换，易于理解，易于扩展；
            </li>
            <li>策略模式中的算法也可以复用在系统的其他地方，从而避免许多重复的复制粘贴工作；</li>
            <li>在策略模式中利用组合和委托来让Context拥有执行算法的能力，这也是继承的一种更轻便的替代方案。</li>
          </ul>
          <p>
            <strong>缺点</strong>：
          </p>
          <ul>
            <li>首先，是用策略模式会在程序中增加许多策略类或者策略对象，但实际上这比把它们负责的逻辑堆砌在Context中要好；</li>
            <li>
              其次，要使用策略模式，必须了解所有的strategy，必须了解各个strategy之前的不同点，这样才能选择一个合适的strategy。如果，我们要选择一种合适的旅游出行路线，必须先了解选择飞机、火车、自行车等方案的细节。此时strategy要向客户暴露它的所有实现，这是违反
              <a
                href="https://www.jianshu.com/p/fbac86119aee"
              >最少知识原则</a>的。
            </li>
          </ul>
          <h2 id="58-一等函数对象与策略模式">5.8 一等函数对象与策略模式</h2>
          <p>
            <font color="eb2f06">🤔：这里没读懂，猜测笔者可能想说明“高阶函数的使用本身就是一种策略模式”这一观点。</font>
          </p>

          <pre><code class="language-html">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"detail-left"</span>&gt;
   <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>第 2 章 模块机制<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
   <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>CommenJS的模块规范<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
   <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>CommenJS对模块的定义十分简单，主要分为3部分：<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
   <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
     <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>模块引用<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
     <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>模块定义<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
     <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>模块标识<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
   <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></span>
   <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>模块引用<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>/&gt;</span></span></code></pre>
        </div>
      </div>
      <div class="detail-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backHome() {
      this.$router.push("blog")
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../assets/css/highlight.css");
.detail-container {
  min-height: 100vh;
}

.detail-wrap {
  height: 100%;
  display: flex;
}

.detail-left {
  flex: 7;

  .back {
    width: 80%;
    margin: 0 auto;
    padding-left: 50px;
    margin-top: 50px;

    .back-to-home {
      height: 3vh;
      transform: rotate(180deg);
      cursor: pointer;
    }
  }

  .content {
    font-size: 18px;
    .createtime {
      color: @assistColor;
    }
  }
}

.detail-right {
  flex: 3;
}

// 平板端适配
@media screen and (max-width: 900px) and (min-width: 768px) {
  .detail-right {
    flex: 0 !important;
  }

  .back {
    padding-left: 0 !important;
  }
}

// 手机端适配
@media screen and (max-width: 500px) {
  .detail-right {
    flex: 0 !important;
  }

  .back {
    padding-left: 0 !important;
  }
}
</style>