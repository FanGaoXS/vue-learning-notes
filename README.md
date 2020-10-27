# Vue.js从零开始

## 1、简单认识Vue.js

Vue (读音 `/vjuː/`，类似于 **view**) 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以**自底向上逐层**应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与[现代化的工具链](https://cn.vuejs.org/v2/guide/single-file-components.html)以及各种[支持类库](https://github.com/vuejs/awesome-vue#libraries--plugins)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

## 2、Vue.js安装

1.  CDN引入
2.  直接下载然后引入，script方式引用 
3.  npm方式安装

注意开发环境版本（vue.js）和生产环境版本（vue.min.js）的区别：开发环境版本有所有的js代码，包括注释，警告信息，用于开发的时候用，体积比较大；生产环境版本就是项目上线的时候用，所有代码整合成了一行，去掉了注释和警告信息，用于项目实际上线的时候用，体积比较小。

## 3、第一个Vue.js程序

我用的是编译器是IDEA，所以我只需要在plugins市场下载vue插件，然后重启IDEA创建一个空项目（empty project），然后新建一个文件夹名叫js，把刚才下载好的vue.js放到这个文件夹里。然后再html里面引用就可以了。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!--引入vue.js-->
    <script src="../js/vue.js"></script>
    <meta charset="UTF-8">
    <title>vue.js第一课</title>
</head>
<body>
<!--定义一个id为app的盒子交给vue接管-->
<div id="app">{{message}}{{message2}}</div>
</body>
<script>
    //实例化Vue对象
    let app = new Vue({
        //el是element（元素）的缩写，接管id为app的盒子，id选择器
        el: '#app',
        //定义数据
        data: {
            //上文中用{{message}}取得数据
            message: 'hello,',
            message2: 'Vue.js',
        }
    });
</script>
</html>
```

步骤总结：

1. 用script的方式引入vue.js
2. 创建id为app（自定义）的div盒子
3. 再写script代码
4. 先new一个Vue对象，参数是el（上文的元素），data（定义数据），名叫app（自定义）接管上文的id叫app的盒子，并且定义数据
5. 最后在盒子里面用`{{数据名}}`就可以获取到定义的数据了
6. data里的数据可以直接定义，也可以从后端或者服务器加载

## 4、循环v-for

尝试一下循环列表，我们先在data里面定义一个数组`[]`是数组，`{}`是对象

```html
<!--定义一个id为app的盒子交给vue接管-->
<div id="app">
    <ul>
        <!--类似Java的增强for循环，students是集合，student是集合中的单个元素-->
        <li v-for="student in students">{{student}}</li>
    </ul>
</div>
</body>
<script>
    //实例化Vue对象
    let app = new Vue({
        //el是element（元素）的缩写，接管id为app的盒子，id选择器
        el: '#app',
        //定义数据
        data: {
            students: ['张三','李四','王麻子']
        }
    });
</script>
```

利用v-for="item in items"的方式遍历中items集合中的单个item元素（类似Java中的增强for循环），然后再利用`{{item}}`取出集合中的单个元素，同时还可以在控制台利用`app.students.pop()`去掉最后一个数据

## 5、事件v-on

在vue中可以使用`v-on:事件名="方法名(参数列表)"`来调用事件，比如调用单击事件就用`v-on:click`，双击事件就用`v-on:dblclick`等等其他事件，同时也可以简写成`@click`或者`@dblclick`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!--引入vue.js-->
    <script src="../js/vue.js"></script>
    <meta charset="UTF-8">
    <title>事件</title>
</head>
<body>
<!--指定一个id为app的div盒子-->
<div id="app">
    <h3>计数器：{{counter}}</h3>
    <!--调用increment函数-->
    <button v-on:click="increment()">+</button>
    <!--调用decrement函数-->
    <button v-on:click="decrement()">-</button>
</div>
<script>
    //实例化Vue对象
    let app = new Vue({
        //获得id为app的div盒子
        el: '#app',
        //定义数据
        data: {
            //计数器
            counter: 0,
        },
        //定义方法
        methods: {
            //递增方法
            increment(){
                this.counter++;
                console.log('调用了increment方法');
            },
            //递减方法
            decrement(id){
                this.counter--;
                console.log('调用了decrement方法');
            }
        }
    });
</script>
</body>
</html>
```

需要注意的是必须在实例化的Vue对象里添加methods属性，然后再在methods属性里添加方法。

## 6、Vue的MVVM模式

MVVM分为三个部分：

M（Model，模型层）：主要负责业务数据相关；

V（View，视图层）：负责视图相关，比如网页的Dom

VM（ViewModel，Model层和View层的桥梁）：负责监听M然后对V进行修改，实现M和V的双向绑定。当M层的数据发生修改时，VM层会监测到变化然后立马对V层的数据也进行修改。反之，当V层的数据发生修改时，VM层也会监测到变化然后对M层的数据进行修改。

总的来说就是Model层和View不会直接相互操作，然后通过中间的一层VM层进行互相联系，降低了耦合。

而且Vue中大部分时间中Vue就是充当了VM层，我们作为程序员只需要做好View层和Model层就好了，因为Vue已经帮我们自动监听加解析加修改。

## 7、Vue的生命周期

和微信小程序开发类似，在Vue.js里每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数，这给了用户在不同阶段添加自己的代码的机会。同时生命周期的钩子函数是通过Vue实例的options对象的属性值传递给Vue的。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vue.js的生命周期</title>
    <script src="../js/vue.js"></script>
</head>
<body>
<div id="app">{{message}}</div>
<script>
    let app = new Vue({
        //绑定上文的元素
        el: '#app',
        //定义数据
        data: {
           message: 'Hello,Vue.js!'
        },
        //定义方法
        methods:{

        },
        //生命周期函数：created（Vue实例被创建后运行的函数）
        created:function () {
            console.log('lifeCycle--->created函数执行');
        }
    });
</script>
</body>
</html>
```

也有一些其它的钩子，在实例生命周期的不同阶段被调用，如`mounted`、`updated`和`destroyed`生命周期钩子的 `this` 上下文指向调用它的 Vue 实例。

这是Vue实例的生命周期图示：

**红线标注的都是执行到对应的生命周期的时候会调用的生命周期钩子函数**

![](E:\吴青珂\大三\JavaEE\笔记\vue\lifecycle.png)

## 8、Vue.js的插值操作

### 8.1 v-once

有的时候可能需要View的数据不根据Model的数据动态变化，就可以使用v-once指令。

```html
<body>

<div id="app">
  <h2>{{message}}</h2>
  <h2 v-once>{{message}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello,Vue.js!',
    },
  });
</script>

</body>
```

加了v-once后{{message}}只会被渲染一次，后面model再改变message的数据的话依旧显示的是第一次渲染的数据不会发生动态改变。就像常量一样，加了v-once标签的数据不再发生改变。

### 8.2 v-html

有的时候可能后端向前端传递的数据不是纯文本或者纯字符串而是富文本，比如`<h2>标题</h2>`，我们希望它在页面上显示的是**标题**而不是`<h2>标题</h2>`，这个时候我们就可以给这个标签加上v-html指令

```html
<body>

<div id="app">
  <p>{{h2}}</p>
  <p v-html="h2">}</p>
</div>

<script src="../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello,Vue.js!',
      h2: '<h2>标题</h2>',
    },
  });
</script>

</body>
```

运行结果：

![image-20200901125619657](E:\吴青珂\大三\JavaEE\笔记\vue\image-20200901125619657.png)

可以看到没有加上v-html指令的标签内显示的内容就是纯字符串，加上了v-html指令的标签内显示的内容就是经过解析过后的富文本

### 8.3 v-text

```html
<body>

<div id="app">
  <p>{{text}},Vue.js!</p>
  <p v-text="text">,Vue.js!</p>
  <p v-text="text+',Vue.js!'">,Vue.js!</p>
</div>

<script src="../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello,Vue.js!',
      text: 'Hello',
    },
  });
</script>

</body>
```

运行结果：

![image-20200901130325498](E:\吴青珂\大三\JavaEE\笔记\vue\image-20200901130325498.png)

可以观察到运行结果，如果直接使用Mustache语法（`{{}}`双大括号）可以直接在标签内里进行拼接字符串，但是如果使用了v-text指令后会直接将标签里的内容覆盖掉，但是同时也可以在v-text指令里使用+号进行拼接。

### 8.4 v-pre

```html
<body>

<div id="app">
  <p>{{message}}</p>
  <p v-pre>{{message}}</p>
</div>

<script src="../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello,Vue.js!',
    },
  });
</script>

</body>
```

运行结果：

![image-20200901130830323](E:\吴青珂\大三\JavaEE\笔记\vue\image-20200901130830323.png)

v-pre就是实打实的显示标签内的内容而不经过解析。

## 9、v-bind动态绑定

### 9.1 v-bind的基本使用

```html
<body>

<div id="app">
  <img v-bind:src="imgUrl" alt="">
  <a v-bind:href="aHref">百度一下</a>
</div>

<script src="../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      aHref: 'https://www.baidu.com',
      imgUrl: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
    },
  });
</script>

</body>
```

传统的img和a标签里的url都是直接写死的，但是开发中肯定不会写死，肯定是从服务器请求然后得到JSON字符串然后从中获取到对应的url存储到Model里面，这个时候就需要用到v-bind指令来将Model里面的url放到img或者a标签里，使得它们能够解析url。

同时v-bind还有一个语法糖（简写）：

常规写法：

```html
<!--常规写法-->
  <img v-bind:src="imgUrl" alt="">
  <a v-bind:href="aHref">百度一下</a>
```

语法糖：（直接将`v-bind:`替换成`:`）

```html
<!--语法糖（简写）-->
  <img :src="imgUrl" alt="">
  <a :href="aHref">百度一下</a>
```

### 9.2 v-bind动态绑定class（对象语法）

在vue里面可以实现动态绑定class，并且可以在class里面定义对象，对象里面采用key-value键值对的方式来确定这个属性是否生效（value必须是boolean类型），同时原来已有的class属性不会被覆盖，而是合并。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-bind动态绑定class（对象语法）</title>
  <style>
    .active1{
      color: red;
    }
    .active2{
      color: blue;
    }
  </style>
</head>
<body>

<div id="app">
  <h2 class="line" :class="{'active1': isActive1,'active2': isActive2}">{{message}}</h2>
  <button v-on:click="changeColor()">切换颜色</button>
</div>

<script src="../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      message: '变色',
      isActive1: true,
      isActive2: false,
    },
    methods: {
      changeColor() {
        this.isActive1=!this.isActive1;
        this.isActive2=!this.isActive2;
      }
    },
  });
</script>

</body>
</html>
```

h2标签里原本有一个固定的class属性叫line，同时后面交给vue解析的里面有一个对象，对象采用的是键值对的方式存储的，只要某个键（属性）的值为true，那么这个属性就会被启用，否则就不会被启用。

总结就是class属性可以用原本固定的，不会被覆盖，只会被合并，:class属性里面可以使用对象来存储，对象里面是键值对的方式存储，key-value，如果value为true则该属性就会被启用，否则不会被启用。

### 9.3 v-bind动态绑定style（对象语法）

v-bind指令也可以动态绑定style的样式：直接在style里利用属性名：属性值给style赋值：

```html
<body>

<div id="app">
  <!--v-bind动态绑定style格式
  <p :style="{key(属性名):value(属性值)}"></p>-->
  <!--直接赋值-->
  <p :style="{color:'red','fontSize':'50px'}">{{message}}</p>
</div>

<script src="../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello,Vue.js!',
    },
  });
</script>

</body>
```

可以看到在style里依然是利用的对象语法来赋值的，key:value，假如value写死了的话就需要加上`''`单引号。

也可以动态获取后端传的value：

```html
<body>

<div id="app">
  <!--v-bind动态绑定style格式
  <p :style="{key(属性名):value(属性值)}"></p>-->
  <!--动态绑定下面的值-->
  <p :style="{'color':color,'fontSize':fontSize}">{{message}}</p>
</div>

<script src="../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello,Vue.js!',
      color: 'red',
      fontSize: '50px',
    },
  });
</script>

</body>
```

记住，直接赋值的时候的value应该加单引号，而动态获取值的时候就不要加引号，这样交给Vue解析的时候才会从下面去获取值。

## 10、computed计算属性

computed（计算好的，已经计算的）的属性就叫**计算属性**。在这之前我们可以直接在html的标签里使用Mustache语法使用data里的数据。像这样：

```html
<body>

<div id="app">
  <!--利用Mustache语法获取data里面的数据-->
  <p>{{firstName}} {{lastName}}</p>
</div>

<script src="../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      firstName: 'James',
      lastName: 'Bond'
    },
  });
</script>

</body>
```

但是有的时候在Mustache语法里无法实现我们想要的效果，所以有的时候我们可以采用计算属性，也就是在Vue实例里添加computed属性，添加类似函数的一样的东西：有函数名，函数体，返回值（返回计算好的属性值）。在上文依旧是采用Mustache语法进行调用：

```html
<body>

<div id="app">
  <!--利用Mustache语法获取data里面的数据-->
  <p>{{firstName}} {{lastName}}</p>
  <!--利用Mustache语法获取computed里的数据-->
  <p>{{fullName}}</p>
</div>

<script src="../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      firstName: 'James',
      lastName: 'Bond'
    },
    //计算属性
    computed: {
      fullName() {
        //返回字符串的组合
        return this.firstName+' '+this.lastName;
      }
    },
  });
</script>

</body>
```

为什么要用computed计算属性还有一个原因就是computed里面的属性是有缓存的，是可以提高运行效率的。

## 11、computed计算属性的getter和setter

其实计算属性有更全面的一种写法，依旧是定义computed属性，然后定义属性名，但是值是一个对象，对象里再定义get和set函数，像这样：

```js
	//计算属性
    computed: {
      fullName: {
        //setter
        set:function () {

        },
        //getter
        get:function () {
          return this.firstName+' '+this.lastName;
        }
      }
    },
```

执行的原理实际上是修改fullName的值的时候就会调用set方法，读取fullName的值的时候就会调用get方法，但是我们一般不会在set方法里面写什么东西，所以就可以直接采用简写：

```js
	//计算属性
    computed: {
      fullName() {
        return this.firstName+' '+this.lastName;
      }
    },
```

简写和上面同时显式声明get和set是一样的，同样也都会隐式调用get和set方法。

## 12、Vue的语法糖总结

1. v-bind动态绑定

   ```html
     <!--v-bind全写-->
     <a v-bind:href="aHref">百度一下</a>
   
     <!--v-bind语法糖（简写）-->
     <a :href="aHref">百度一下</a>
   ```

   将`v-bind:`直接简写成了`:`

2. v-on事件监听

   ```html
     <!--v-on全写-->
     <button v-on:click="log()">打印</button>
     <!--v-on语法糖（简写）-->
     <button @click="log()">打印</button>
   ```

   将`v-on:`直接简写成了`@`

## 13、v-on参数传递问题

v-on绑定的是事件，下面我用click单击事件为例子，梳理一下v-on事件参数传递的问题。

1. 没有形参

   ```html
   <body>
   
   <div id="app">
   
     <!--调用方法没有形参的时候可以不加括号（省略写法）-->
     <button @click="btnClick1">按钮1</button>
     <!--调用方法即使没有形参也可以加上括号，跟按钮1是等价的-->
     <button @click="btnClick1()">按钮1</button>
   
   </div>
   
   <script src="../js/vue.js"></script>
   <script>
     let app = new Vue({
       el: '#app',
       data: {
         
       },
       methods: {
         //无参方法
         btnClick1() {
           console.log('btnClick1被调用');
         },
       },
     });
   </script>
   
   </body>
   ```

   你可以不用加括号或者加上括号都可以，个人建议加上括号，易读。

2. 有形参

   ```html
   <body>
   
   <div id="app">
   
     <!--调用方法有形参的时候就可以传递参数-->
     <button @click="btnClick2('测试')">按钮2</button>
   
   </div>
   
   <script src="../js/vue.js"></script>
   <script>
     let app = new Vue({
       el: '#app',
       data: {
   
       },
       methods: {
         //有参方法
         btnClick2(value){
           console.log('btnClick2被调用');
           console.log(value);
         },
       },
     });
   </script>
   
   </body>
   ```

   直接作为参数传递进去就好了

3. **将事件对象作为形参传递**

   ```html
   <body>
   
   <div id="app">
   
     <!--调用方法加上形参并且传递“$event”参数就可以显式传递事件对象（单击）-->
     <button @click="btnClick3($event,'测试')">按钮3</button>
     <!--如果不加上“$event”就会隐式传递事件对象，并且对应第一个形参（不建议这么做）-->
     <button @click="btnClick3">按钮3</button>
   
   </div>
   
   <script src="../js/vue.js"></script>
   <script>
     let app = new Vue({
       el: '#app',
       data: {
   
       },
       methods: {
         //有参方法，事件对象
         btnClick3(event,value){
           console.log('btnClick3被调用');
           console.log(event);
           console.log(value);
         }
       },
     });
   </script>
   
   </body>
   ```

   一般的做法就是直接在形参这里写上`$event`参数，然后就可以直接显式传递给方法自动解析成事件对象，比如click就是单击事件，dblclick就是双击事件。同时还可以直接不传递参数，一个都不写，这样方法里就会自动把第一个实参解析为事件对象，这种是隐式传递（不推荐这样做，不易读）。建议还是加上`$event`显式传递参数更加直观。

## 14、v-on修饰符

1. .stop修饰符**阻止冒泡事件**

   给事件加上`.stop`修饰符可以达到阻止冒泡事件的目的。

   先理解一下冒泡事件的概念：冒泡事件就是事件自下而上（自内而外）依次触发。简单来说在html里面就是假如标签内外都有事件，那么触发了标签最里面的事件后，标签外部的事件也会被触发。举个例子来体会一下：

   ```html
   <body>
   
   <div id="app">
   
     <div id="div1" @click="divClick">
       <p>div1</p>
       <button @click="btnClick">按钮1</button>
     </div>
   
   </div>
   
   <script src="../js/vue.js"></script>
   <script>
     let app = new Vue({
       el: '#app',
       data: {
         
       },
       methods: {
         //按钮点击事件
         btnClick() {
           console.log('btnClick');
         },
         //div点击事件
         divClick(){
           console.log('divClick');
         },
       },
     });
   </script>
   
   </body>
   ```

   你会发现，点击按钮不仅会触发`divClick()`还会触发`btnClick()`（这就是冒泡事件），点击div1就只会触发`divClick()`。这在实际开发中并不是我们想要的，我们更多的想要的是点击按钮触发按钮事件，点击div1中文字就触发div事件，所以我们就要阻止这个按钮的冒泡事件传递，那么就只需要在按钮上加上`.stop`就可以了

   ```html
   <button @click.stop="btnClick">按钮1</button>
   等价于
   event.stopPropagation()
   ```

   那么，这个按钮的冒泡事件就被阻止了，就无法触发它外部标签的事件了。

2. .prevent修饰符**阻止组件默认事件**

   给事件加上`.prevent`修饰符以达到禁止该组件的默认事件，比如在form里面的自带的submit提交按钮的默认事件就是向form的action属性发起请求

   ```html
   <div id="app">
     <form action="https://www.baidu.com">
       <input type="submit" value="提交">
     </form>
   </div>
   ```

   点击提交按钮就会向`https://www.baidu.com`发起请求

   如果加上了`.prevent`修饰符后就会阻止该组件的默认事件了：

   ```html
   <body>
   
   <div id="app">
     <form action="https://www.baidu.com">
       <!--阻止组件的默认事件，而使用自定义的事件-->
       <input type="submit" value="提交" @click.prevent="submit">
     </form>
   </div>
   
   <script src="../js/vue.js"></script>
   <script>
     let app = new Vue({
       el: '#app',
       data: {
   
       },
       methods: {
         //自定义按钮提交
         submit() {
           console.log('submit');
         }
       },
     });
   </script>
   
   </body>
   ```

   这样点击按钮后就不会向action发起请求，而是执行用户自定义的submit方法，用户可以在这个方法里面自定义请求。

3. .[keyCode|keyAlias]修饰符**监听键盘具体键位事件**

   监听键盘具体某个键的事件。

   ```html
   <body>
   
   <div id="app">
     <!--输入框（监听键盘抬起事件，所有的按键都会被适用）-->
     <input type="text" @keyup="keyUp">
   </div>
   
   <script src="../js/vue.js"></script>
   <script>
     let app = new Vue({
       el: '#app',
       data: {
         message: 'Hello,Vue.js!',
       },
       methods: {
         //键盘按下后抬起事件
         keyUp() {
           console.log('keyUp');
         }
       },
     });
   </script>
   
   </body>
   ```

   `@keyUp`就是监听所有键位的抬起事件，如果加上了具体的某个键位的比如`.enter`或者`.13`因为回车键的keyCode就是13，回车键的keyAlias就是enter

   ```html
   <div id="app">
     <!--输入框（只监听回车键）-->
     <input type="text" @keyup.enter="keyUp">
     <!--输入框（只监听回车键）-->
     <input type="text" @keyup.13="keyUp">
   </div>
   
   <script src="../js/vue.js"></script>
   <script>
     let app = new Vue({
       el: '#app',
       data: {
         message: 'Hello,Vue.js!',
       },
       methods: {
         //键盘按下后抬起事件
         keyUp() {
           console.log('keyUp');
         }
       },
     });
   </script>
   
   </body>
   ```

4. .once修饰符只监听一次事件

   只会触发第一次，避免重复触发

   ```html
   <body>
   
   <div id="app">
     <!--加了.once修饰符后该按钮只会触发第一次，避免重复触发-->
     <button @click.once="btnClick">按钮</button>
   </div>
   
   <script src="../js/vue.js"></script>
   <script>
     let app = new Vue({
       el: '#app',
       data: {
       },
       methods: {
         btnClick() {
           console.log('btnClick');
         }
       },
     });
   </script>
   
   </body>
   ```

   

## 15、v-if、v-else-if、v-else

Vue里面也提供了条件判断，这点是和绝大多数语言都是相通的，举个简单例子来看一下。

```html
<div id="app">
  <div v-if="score>=90">
    <h2>成绩优秀</h2>
  </div>
  <div v-else-if="score>=60">
    <h2>成绩及格</h2>
  </div>
  <div v-else>
    <h2>成绩不合格</h2>
  </div>
</div>

<script src="../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      score: 90
    },
  });
</script>

</body>
```

注意为了提高代码可读性建议做到if、elseif、else同级并列。并且通常不要在html里写太多逻辑判断的东西i，最好是在计算属性中进行复杂的逻辑判断然后返回给View。举个例子：

```html
<body>

<div id="app">
  <h2>{{message}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      score: 90
    },
    computed: {
      message() {
        //先初始化一个返回值
        let returnMessage='';
        if (this.score>=90){
          returnMessage='成绩优秀';
        }else if (this.score>=60){
          returnMessage='成绩及格';
        }else {
          returnMessage='成绩不合格';
        }
        //返回这个初始化的返回值
        return returnMessage;
      }
    },
  });
</script>

</body>
```

直接在computed计算属性里面进行逻辑判断然后正确返回就好了。条件判断跟其他的编程语言基本没啥区别，主要就是需要注意的就是最好在view里面顶多进行简单的逻辑判断，复杂的逻辑判断交给计算属性。

## 16、Vue的Dom会复用的问题

在Vue的底层中其实是会先将Dom渲染成虚拟Dom最后再将虚拟Dom渲染到页面上的。有的时候Vue为了提高渲染时候的效率，Vue会自主地将它认为不可能产生冲突的两个Dom元素渲染成为一个虚拟Dom，这样的话就不会再额外创建另外一个虚拟Dom，可以大幅提升效率。

举个简单例子来说：

```html
<body>

<div id="app">
  <span v-if="isUserName">
    <label for="username">用户账号</label>
    <input type="text" id="username" placeholder="请在这里输入你的用户账号">
  </span>
  <span v-else>
    <label for="email">用户邮箱</label>
    <input type="email" id="email" placeholder="请在这里输入你的用户邮箱">
  </span>
  <button @click="changeLoginType">切换登录方式</button>
</div>

<script src="../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      isUserName: true
    },
    methods: {
      //切换登录方式
      changeLoginType() {
        this.isUserName=!this.isUserName;
      }
    },
  });
</script>

</body>
```

这个需求就是通过二元来判断是显式用户账号输入框还是用户邮箱输入框，因为这两个span是互斥的，不可能同时存在，所以Vue就会自主地将他们两个Dom渲染成为一个虚拟Dom，当切换到另外一个输入框的时候就不需要再重新创建一个新的Dom。所以，其实两个span里的input输入框是被复用了的，所以当你在一个输入框里输入value的时候然后切换到另外一个输入框，你刚才输入的value仍然还在，这种情况有时候是不想出现的，我们更多的是想切换登录方式后再清除掉原有的输入内容。那么，我们就可以给这两个input输入框加上唯一的标识key，这样Vue就不会再擅作主张的把两个渲染成一个虚拟Dom了，而是不同的虚拟Dom。

```html
  <span v-if="isUserName">
    <label for="username">用户账号</label>
    <input type="text" id="username" placeholder="请在这里输入你的用户账号" key="username">
  </span>
  <span v-else>
    <label for="email">用户邮箱</label>
    <input type="text" id="email" placeholder="请在这里输入你的用户邮箱" key="email">
  </span>
```

这个需要视使用场景而定，假如你切换了输入框后想要保留原有内容你就不会唯一标识key，使得Vue渲染成为同一个虚拟Dom，这样效率也会高。如果你需要切换输入框后不保留原有内容甚至情况，那么就加上唯一标识key，使得Vue渲染成为不同的虚拟Dom。

## 17、v-show与v-if的区别

`v-if`操作的是html的Dom元素，当if里面的boolean值为false时，那么`v-if`所在的整个dom元素都不存在，而`v-show`里面的boolean值如果是false的话，那么Vue其实仅仅是个这个元素加上了`style="display: none;"`的样式隐藏了而已。

## 18、v-for遍历对象里面的元素

v-for不仅仅可以遍历数组、集合，还可以遍历对象中的属性，比如这个student对象：

```js
	  //student对象
      student:{
        id:10001,
        name:'张三',
        age:18,
      }
```

我想要依次把这个对象的属性遍历出来我也可以使用v-for来遍历出来，像这样：

```html
<body>

<div id="app">
  <!--遍历value-->
  <ul>
    <li v-for="item in student">{{item}}</li>
  </ul>
</div>

<script src="../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      //student对象
      student:{
        id:10001,
        name:'张三',
        age:18,
      }
    },
  });
</script>

</body>
```

这样就可以遍历这个对象，但是只能遍历出属性的值，也就是value，假如我们想要遍历出属性名，也就是key怎么办呢？像这样：

```html
  <!--遍历key-value-->
  <ul>
    <li v-for="(value,key) in student">{{key}}--{{value}}</li>
  </ul>
```

**注意：**这里的value只能在一个参数位置，位置不能改变。

同时也可以遍历出下标index，像这样：

```html
  <!--遍历key-value和下标-->
  <ul>
    <li v-for="(value,key,index) in student">{{index}}--{{key}}--{{value}}</li>
  </ul>
```

## 19、常用的数组响应式方法

1. push()：向尾部插入元素

   ```js
           // 1.push：向尾部插入元素
           this.letters.push('e');//插入单个元素
           this.letters.push('e','x','a','m');//插入多个元素
   ```

   

2. pop()：从尾部移除元素

   ```js
           // 2.pop：从尾部移除元素
           this.letters.pop();
   ```

   

3. unshift()：向首部插入元素

   ```js
           // 3.unshift：向首部插入元素
           this.letters.unshift('e');//插入单个元素
           this.letters.unshift('e','x','a','m');//插入多个元素
   ```

   

4. shift()：从首部移除元素

   ```js
           // 4.shift：从首部移除元素
           this.letters.shift();
   ```

5. sort()：元素自动排序（按一定规则）

   ```js
           // 5.sort：数组排序
           this.letters.sort();
   ```

6. reverse()：元素反转

   ```js
           // 6.reverse：数组反转
           this.letters.reverse();
   ```

7. **splice()：元素删除/插入/替换**

   splice方法有一个重载方法：

   ```js
   splice(start: number, deleteCount?: number): T[];
   splice(start: number, deleteCount: number, ...items: T[]): T[];
   ```

   start：指定元素开始的下标

   deleteCount：指定要删除元素的个数

   items：插入或者替换的多个元素

   元素删除：

   ```js
           //从数组下标为1的元素开始，删除2个元素
           this.letters.splice(1,2);
   ```

   元素插入：（当第二个参数为0的时候代表插入元素）

   ```js
           //在数组下标为1的元素后面插入多个元素
           this.letters.splice(1,0,'e','x','a','m');
   ```

   元素替换：

   ```js
           //在数组下标为1的元素后面的2个元素替换为多个元素
           this.letters.splice(1,2,'e','x','a','m');
   ```

   其实我们可以理解成这三种操作实际上都是在对数组中的元素进行删除操作。当第二个参数有数字的时候代表要删除多少个元素，替换的时候我们也可以理解成先删掉元素再进行追加元素。当第二个参数为0的时候就代表不删除元素，然后直接进行追加元素。

**特别注意：**使用如下这种方法并不能响应式的改变数组元素：

```js
this.letters[0]='example';
```

如果想要响应式的替换元素可以采用：

```js
this.letters.splice(0,1,'example');
```

## 20、在Vue中使用filters过滤器

过滤器同样是Vue的一个options参数，叫属性名叫filters，值是一个对象，像这样：

```js
    filters: {
      showPrice(price) {
        //toFixed(2)保留小数点后两位
        return '￥'+price.toFixed(2);
      }
    }
```

使用的时候就是像这样使用的：

```html
      <td>{{book.price | showPrice}}</td>
```

在这个参数后面加上`|`管道流符号，再加上过滤器的名字（注意，这个时候就不需要传递参数了，因为管道会自动将前面这个变量当作参数传递给后面的过滤器），像这样：

```html
      <td>{{showPrice(book.price)}}</td>
```

## 21、v-model框双向绑定输入框

在表单中我们时常需要将model层里的数据映射到view层上，并且最好能够实现其中一个改变另外一个也跟着改变，v-model双向绑定就帮我们实现了这个需求。

```html
<body>

<div id="app">
  <input type="text" v-model="message">
  <h2>{{message}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello,Vue.js!',
    },
  });
</script>

</body>
```

只要你改变data里的数据或者改变输入框中的值，model层和view里输入框中的值也会发生改变。

## 22、v-model双向绑定radio

```html
<body>

<div id="app">
  <label>性别：</label>
  <input type="radio" name="sex" value="男" v-model="sex">男
  <input type="radio" name="sex" value="女" v-model="sex">女
  <h3>你选择的性别是：{{sex}}</h3>
</div>

<script src="../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      sex:''
    },
  });
</script>

</body>
```

直接在每个radio里用v-model绑定sex，如果在data里的sex没有赋初始值，那么input里的radio默认就什么都不选，如果初始值赋了其中一个，那么默认就会选择那一个。

## 23、v-model双向绑定checkbox

1. 单选框

   ```html
   <body>
   
   
   <div id="app">
     <!--v-model双向绑定结合checkbox实现单选框-->
     <label for="license">
       <input type="checkbox" id="license" value="同意" v-model="isAgree">我已经完整阅读上述协议
     </label>
     <h2>您选择的是：{{isAgree | showAgree}}</h2>
   </div>
   
   <script src="../js/vue.js"></script>
   <script>
     let app = new Vue({
       el: '#app',
       data: {
         isAgree: false,
       },
       filters: {
         showAgree: function (value) {
           if (value===true){
             return '同意';
           }else if (value===false){
             return '不同意';
           }
         }
       }
     });
   </script>
   
   
   </body>
   ```

   同样，直接用`v-model`绑定data里面的`isAgree`就行了，绑定boolean值，true就是选中，false就是不被选中，为了方便观察读出的结果，我们可以使用过滤器将选中的boolean值格式化为`同意`或`不同意`的字符串。

2. 复选框

   ```html
   <body>
   
   
   <div id="app">
   
     <!--v-model双向绑定结合checkbox实现复选-->
     <h2>爱好：</h2>
     <input type="checkbox" name="hobby" value="唱" v-model="hobbies">唱
     <input type="checkbox" name="hobby" value="跳" v-model="hobbies">跳
     <input type="checkbox" name="hobby" value="rap" v-model="hobbies">rap
     <input type="checkbox" name="hobby" value="篮球" v-model="hobbies">篮球
     <h2>你选择的爱好是：{{hobbies | showHobbies}}</h2>
   </div>
   
   <script src="../js/vue.js"></script>
   <script>
     let app = new Vue({
       el: '#app',
       data: {
         hobbies:[]
       },
       filters: {
         showHobbies(hobbies){
           let returnString='';
           for (let hobby of hobbies) {
             returnString+=hobby+' ';
           }
           return returnString;
         }
       }
     });
   </script>
   
   
   </body>
   ```

   依旧是直接使用`v-model`绑定data里的hobbies数组（因为复选框的结果是数组），同意为了方便展示，直接使用过滤器将hobbies数组格式化成字符串数组然后遍历显示出来。
   
3. 与v-bind结合

   大多数时候我们应该是要从后端获得原始的checkbox要显示的数据，然后前端复选了后再传递到提交到后端。从后端获取到的数据肯定是数组，然后通过遍历数组然后进行初始显示到页面上供用户选择。所以最开始肯定使用label来遍历数组：

   ```html
   <body>
   
   <div id="app">
     <label v-for="item in originHobbies">
       <input type="checkbox" :value="item" v-model="hobbies" >{{item}}
     </label>
     <h2>你选择的爱好是：{{hobbies}}</h2>
   </div>
   
   <script src="../js/vue.js"></script>
   <script>
     let app = new Vue({
       el: '#app',
       data: {
         //要显示在checkbox里的供用户选择的爱好数组（从后端获取）
         originHobbies:['唱','跳','rap','篮球'],
         //从前端得到然后再返回给后端
         hobbies: []
       },
     });
   </script>
   
   </body>
   ```

   因为遍历出来的数据肯定不止一个，所以要使用v-bind动态绑定value从而得到多个值，然后再通过v-model绑定到选择好的数组里供传递给后端。

## 24、v-model双向绑定select

```html
<body>

<div id="app">

  <!--单选-->
  <select name="fruit" v-model="fruit">
    <option value="香蕉">香蕉</option>
    <option value="苹果">苹果</option>
    <option value="梨">梨</option>
  </select>
  <h2>你选择的水果是：{{fruit}}</h2>

  <!--多选-->
  <select name="fruits" v-model="fruits" multiple size="3">
    <option value="香蕉">香蕉</option>
    <option value="苹果">苹果</option>
    <option value="梨">梨</option>
  </select>
  <h2>你选择的水果是：{{fruits | showFruits}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      fruit:'香蕉',
      fruits:[]
    },
    filters: {
      showFruits: function (fruits) {
        let returnString='';
        for (let fruit of fruits) {
          returnString+=fruit+' ';
        }
        return returnString;
      }
    }
  });
</script>

</body>
```

select标签里通过添加multiple属性指定变成多选，同样是需要在select里添加v-model绑定data里面的数据。

## 25、v-model修饰符

1. lazy修饰符

   因为input输入框的特性，v-model绑定了data中的数据的时候是输入的时候立马把值附到data的数据里面的，而通常有的时候我们并不需要即使得到值，而是希望用户在输入框里失去焦点的时候再响应事件，比如用户按enter或者在输入框外面点击的时候，就直接给v-model加上.lazy修饰符：

   ```html
     <!--1、lazy修饰符（懒加载）-->
     <input type="text" v-model.lazy="message">
     <h3>你输入的内容是：{{message}}</h3>
   ```

   现在就是用户按enter或者在输入框外点击的时候才会触发事件（赋值），而不是随时都在赋值。

2. number修饰符

   因为html的input标签的特性，你所有的文本框中输入的内容都是字符串类型，即使你给强制指定了type为number但是你传递给后端的时候依旧是字符串类型，所以大多数时候你还需要在后端做一次强制类型转换，这也是html的input标签的特性，Vue的改进，只需要给v-model添加.number修饰符就可以在input框里作强制类型转换而不需要用js来转换或者在后端进行强制类型转换。比如：

   ```html
     <!--2、number修饰符（强制转换为数值类型）-->
     <input type="number" v-model.number="number">
     <h3>你输入的{{number}}是{{typeof number}}类型</h3>
   ```

   

3. trim修饰符

   trim修饰符就比较简单，就是去除input字符串里前和后的空格。

   ```html
     <!--3、trim修饰符（字符串前后去空格）-->
     <input type="text" v-model="message">
     <h3>你输入的内容是：{{message}}</h3>
   ```

## 26、Vue的组件化开发

Vue可以将代码块封装成为一个组件，相互独立，方便管理和维护。同时还可以提高代码的复用性。

组件化开发的过程：

1. 创建组件构造器（`Vue.extend()`）

   ```js
     //1、创建组件构造器（需要一个extendOptions对象作为参数）
     let cpnConstructor = Vue.extend({
       template:`
         <div>
           <h2>标题</h2>
           <h3>内容</h3>
         </div>
       `
     });
   ```

   注意template属性的值可以使用html代码，同时结合ES6新语法使用tab键上的`号就可以达到将多行的代码直接换行，而不是以前的单引号加回车。

2. 注册组件（`Vue.component()`）

   ```js
     //2、注册组件（第一个参数是给这个自定义组件取的名字，第二个参数是组件构造器）
     Vue.component('cpn',cpnConstructor);
   ```

   因为html中不支持驼峰命名，所以自定义的组件名不可以使用驼峰命名法。

3. 使用组件

   ```html
   <div id="app">
     <!--使用cpn组件-->
     <cpn></cpn>
     <!--cpn组件复用-->
     <cpn></cpn>
     <cpn></cpn>
     <cpn></cpn>
   </div>
   ```

   直接在需要使用的html标签里使用就行了，前提是这个标签要交给Vue托管。

4. 全部代码

   ```html
   <body>
   
   <div id="app">
     <!--使用cpn组件-->
     <cpn></cpn>
     <!--cpn组件复用-->
     <cpn></cpn>
     <cpn></cpn>
     <cpn></cpn>
   </div>
   
   <script src="../js/vue.js"></script>
   <script>
   
     //1、创建组件构造器（需要一个extendOptions对象作为参数）
     let cpnConstructor = Vue.extend({
       //template就是自定义组件的模板
       template:`
         <div>
           <h2>标题</h2>
           <h3>内容</h3>
         </div>
       `
     });
   
     //2、注册组件（第一个参数是给这个自定义组件取的名字，第二个参数是组件构造器）
     Vue.component('cpn',cpnConstructor);
   
     let app = new Vue({
       el: '#app',
       data: {
       },
     });
   </script>
   
   </body>
   ```

   注意，需要先创建组件构造器然后注册组件，然后再用Vue托管html里的组件。

## 27、全局组件和局部组件

1. 全局组件

   全局组件顾名思义就是所有的Vue实例对象里都可以使用的组件，刚刚上述注册的组件就是全局组件可以在另外一个Vue实例中使用，比如：

   ```html
   <body>
   
   <div id="app">
     <cpn1></cpn1>
   </div>
   
   <div id="app2">
     <cpn1></cpn1>
   </div>
   
   <script src="../js/vue.js"></script>
   <script>
   
     //组件构造器
     let cpnConstructor1 = Vue.extend({
       template:`
       <div>
         <h2>全局组件</h2>
         <h3>全局组件</h3>
       </div>
       `
     });
   
     //注册全局组件cpn1
     Vue.component('cpn1',cpnConstructor1);
   
     let app = new Vue({
       el: '#app',
     });
   
     let app2 = new Vue({
       el: '#app2',
     });
   </script>
   
   </body>
   ```

   使用`Vue.component()`注册的组件就是全局组件，可以供所有的Vue实例对象使用，比如上述梨子就供#app1和#app2使用了

2. 局部组件

   局部组件就是只能在哪个Vue实例中注册的，就只能在该Vue实例中使用。比如：

   ```html
   <body>
   
   <div id="app">
     <cpn2></cpn2>
   </div>
   
   <div id="app2">
     <cpn2></cpn2>
   </div>
   
   <script src="../js/vue.js"></script>
   <script>
   
     //组件构造器
     let cpnConstructor2 = Vue.extend({
       template:`
       <div>
         <h2>局部组件</h2>
         <h3>局部组件</h3>
       </div>
       `
     });
   
     let app = new Vue({
       el: '#app',
       components:{
         cpn2:cpnConstructor2
       }
     });
   
     let app2 = new Vue({
       el: '#app2',
     });
   </script>
   
   </body>
   ```

   因为cpn2组件只在#app里注册了，所有就只能在app这个Vue实例中使用，而不能在app2这个Vue实例中使用。同时局部组件的注册方法是利用传递Vue实例的Options属性的方法：

   ```js
     let app = new Vue({
       el: '#app',
       components:{
         //自定义组件的名字：组件的构造器
         cpn2:cpnConstructor2
       }
     });
   ```


## 28、父组件和子组件

如果想在组件里使用另外的组件的话，就需要用到组件的嵌套。步骤如下：

1. 注册多个组件

   ```js
     //创建组件构造器2
     let cpnConstructor2 = Vue.extend({
       template:`
       <div>
         <h2>我是组件2的标题</h2>
         <h3>我是组件2的内容</h3>
       </div>
       `
     });
   
     //创建组件构造器1
     let cpnConstructor1 = Vue.extend({
       template:`
       <div>
         <h2>我是组件1的标题</h2>
         <h3>我是组件1的内容</h3>
       </div>
       `
     });
   ```

2. 在Vue实例里注册局部组件

   ```js
     let app = new Vue({
       el: '#app',
       data: {
       },
       components:{
         //在app里注册局部组件cpn1
         cpn1:cpnConstructor1
       }
     });
   ```

3. 在cpn1组件的构造器里的注册cpn2组件并在template中使用

   ```js
     let cpnConstructor1 = Vue.extend({
       template:`
       <div>
         <h2>我是组件1的标题</h2>
         <h3>我是组件1的内容</h3>
         <cpn2></cpn2>
       </div>
       `,
       components:{
         //在cpn1里注册cpn2
         cpn2:cpnConstructor2
       }
     });
   ```

   注：在cpn1里注册cpn2，那么久只能在cpn1的template中使用cpn2

   此时，cpn1就是父组件，cpn2就是子组件

4. 所有代码

   ```html
   <body>
   
   <div id="app">
     <cpn1></cpn1>
   </div>
   
   <script src="../js/vue.js"></script>
   <script>
   
     //创建组件构造器2（子组件）
     let cpnConstructor2 = Vue.extend({
       template:`
       <div>
         <h2>我是组件2的标题</h2>
         <h3>我是组件2的内容</h3>
       </div>
       `
     });
   
     //创建组件构造器1（父组件）
     let cpnConstructor1 = Vue.extend({
       template:`
       <div>
         <h2>我是组件1的标题</h2>
         <h3>我是组件1的内容</h3>
         <cpn2></cpn2>
       </div>
       `,
       components:{
         //在cpn1里注册cpn2
         cpn2:cpnConstructor2
       }
     });
   
     let app = new Vue({
       el: '#app',
       data: {
       },
       components:{
         //在app里注册局部组件cpn1
         cpn1:cpnConstructor1
       }
     });
   </script>
   
   </body>
   ```

## 29、组件模板分离写法

在上述代码中，我们创建组件构造器的时候需要给template属性传递参数，参数是html代码，这样就会导致js代码里面夹杂了大量html代码，看起来会非常杂糅，所以为了改变这一现象并且使得代码看起来不那么杂糅，推荐使用模板分离写法。把html代码写在body标签里，给一个唯一的id给这个模板，然后将它赋给template属性。

1. html模板

   ```html
   <template id="cpn">
     <div>
       <h2>我是标题</h2>
       <h3>我是内容</h3>
     </div>
   </template>
   ```

   给这个模板赋id

2. 作为参数将模板传递给template

   ```js
     //创建组件构造器
     let cpnConstructor = Vue.extend({
       template:'#cpn'
     });
   ```

   将这个模板传递给template

3. 完整代码

   ```html
   <body>
   
   <div id="app">
     <cpn></cpn>
   </div>
   
   <template id="cpn">
     <div>
       <h2>我是标题</h2>
       <h3>我是内容</h3>
     </div>
   </template>
   
   <script src="../js/vue.js"></script>
   <script>
   
     //创建组件构造器
     let cpnConstructor = Vue.extend({
       template:'#cpn'
     });
   
     //注册组件为全局组件
     Vue.component('cpn',cpnConstructor);
   
     let app = new Vue({
       el: '#app',
     });
   </script>
   
   </body>
   ```



## 30、组件里的data

组件里不能使用Vue实例里的data，所以组件里必须要有自己的data，就像“我的附庸的附庸不是我的附庸”一样。然而在组件里声明数据的方式跟在Vue实例里声明数据的方式有所不用，组件中是用函数来声明的，然后返回值返回的是数据，像这样：

```js
  //创建组件构造器
  let cpnConstructor = Vue.extend({
    template: '#cpn',
    data(){
      return {
        message: 'Hello,Vue.js!'
      }
    }
  });
```

这里比较特殊的就是利用函数来声明data，然后返回具体的数据的目的就是为了保证利用同一个组件构造器构造的多个组件里的数据不共用，每个组件各自有各自独立的数据。然后在template中使用：

```html
<template id="cpn">
  <div>
    <h2>我是标题</h2>
    <h3>{{message}}</h3>
  </div>
</template>
```



## 31、父子组件之间通信（父传子利用props）

在绝大多数真实开发过程中，父子组件是不可能完全隔离的，他们之间也会互相传输数据，比如子组件会从父组件获取数据，父组件也会给子组件传递参数，这之间的行为就好像“通信”一样。而父组件向子组件通信的方式是利用props。基本步骤如下：

```js
  //子组件
  let cpnConstructor = Vue.extend({
    template:'#cpn',
    //子组件从父组件获取属性
    props: {

      //子属性cmessage
      cmessage: {
        //指定从父组件获取的属性的类型
        type: String,
        //要求父组件必须向子组件传递该参数
        required:true
      },

      //子属性cmovies
      cmovies: {
        type: Array,
        //设置假如父组件没有向子组件传递该参数的默认值
        default(){//类型是数组或者对象的时候，默认值必须是函数
          return ['movie1','movie2','movie3'];
        }
      }

    },
  });
```

在子组件里定义props属性，对象参数里定义将父组件获取到的参数的自定义属性名，参数同样是对象，该对象的参数有type（指定传入参数的数据类型），required（指定是否必须传入参数，true为必须），default（指定传入参数的默认值）。其中default比较特殊，如果传入的参数是数组或者对象类型，那么default必须指定为函数，然后将默认值返回。

```html
<!--root组件-->
<div id="app">
  <!--在root组件里使用cpn组件-->
  <cpn v-bind:cmessage="message" v-bind:cmovies="movies"></cpn>
</div>
```

同时在需要用到参数的父组件里声明子组件，并且在该子组件标签里利用v-bind将父组件里的参数绑定到子组件里。比如：

```html
v-bind:cmessage="message"
<!-- cmessage是在子组件的props里声明的参数，message是在父组件的data中的数据 -->
```

然后再子组件里就可以使用了：

```html
<!--cpn组件模板-->
<template id="cpn">
  <div>
    <h2>{{cmessage}}</h2>
    <ul>
      <li v-for="movie in cmovies">{{movie}}</li>
    </ul>
  </div>
</template>
```

cmessage和cmovies就是子组件里props里的属性，就可以直接使用了。

完整代码：

```html
<body>

<!--root组件-->
<div id="app">
  <!--在root组件里使用cpn组件-->
  <cpn v-bind:cmessage="message" v-bind:cmovies="movies"></cpn>
</div>

<!--cpn组件模板-->
<template id="cpn">
  <div>
    <h2>{{cmessage}}</h2>
    <ul>
      <li v-for="movie in cmovies">{{movie}}</li>
    </ul>
  </div>
</template>

<script src="../js/vue.js"></script>
<script>

  //子组件
  let cpnConstructor = Vue.extend({
    template:'#cpn',
    //子组件从父组件获取属性
    props: {

      //子属性cMessage
      cmessage: {
        //指定从父组件获取的属性的类型
        type: String,
        //要求父组件必须向子组件传递该参数
        required:true
      },

      //子属性cMovies
      cmovies: {
        type: Array,
        //设置假如父组件没有向子组件传递该参数的默认值
        default(){//类型是数组或者对象的时候，默认值必须是函数
          return ['movie1','movie2','movie3'];
        }
      }

    },
  });

  //root组件（根组件）
  let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello,Vue.js!',
      movies:['钢铁侠1','钢铁侠2','钢铁侠3']
    },
    //在root组件里注册子组件
    components:{
      cpn:cpnConstructor
    }
  });
</script>

</body>
```

**Tips：**因为html里英文字母大小写是不敏感的，所以不支持驼峰命名的，但是vue里面支持，所以在html标签里使用到驼峰的地方就添加横杠`-`，比如`cMessage`就应该变成`c-message`。或者索性直接不使用驼峰命名。

## 32、父子组件之间通信（子传父利用$emit）

在开发的过程中，有的时候也需要通过子组件来向父组件传递数据或者对象的时候，比如分类列表，大多数时候分类列表的二级列表里的东西应该是根据一级分类列表的数据来变化的，所以这个时候其实是根据一级菜单点击事件然后向服务器发送请求，获得二级列表里的数据然后来进行显示的。所以，子传父其实是利用子组件里产生事件，然后发送事件，父组件再接收（监听）事件，然后进行相应的处理。

模拟子组件和父组件，父组件的data里包含一级列表数组对象，然后将子组件注册到父组件里：

```js
  //子组件
  let cpnConstructor = Vue.extend({
    template:'#cpn',
    data(){
      return {
        categories:[
          {id:1,name:'英语'},
          {id:2,name:'数学'},
          {id:3,name:'语文'},
        ]
      }
    },
  });

  //root组件（父组件）
  let app = new Vue({
    el: '#app',
    data: {

    },
    components:{
      //将子组件注册到父组件里
      cpn:cpnConstructor
    },
  });
```

子组件的模板template，以按钮的形式遍历出分类按钮：

```html
<!--子组件模板-->
<template id="cpn">
  <div>
    <!--循环遍历出分类-->
    <button v-for="item in categories">{{item.name}}</button>
  </div>
</template>
```

此时需要给按钮添加点击事件，在该事件里利用`this.$emit()`发射该事件，并且传递对象：

```js
  //子组件
  let cpnConstructor = Vue.extend({
    template:'#cpn',
    data(){
      return {
        categories:[
          {id:1,name:'英语'},
          {id:2,name:'数学'},
          {id:3,name:'语文'},
        ]
      }
    },
    methods: {
      btnClick(item) {
        console.log('子组件---->',item);
        //将子组件的事件发送出去，并且自定义事件名为item-click
        this.$emit('item-click',item);
      }
    },
  });
```

`'item-click'`是自定义的事件名，表明在外部需要监听（接收）该事件，`item`是根据这个事件一起传递的对象，外部接收到该事件后同时也会接收到该对象。

在父组件里通过监听刚刚自定义的事件（item-click）：

```html
<!--root（父）组件模板-->
<div id="app">
  <!--在父组件里中使用子组件-->
  <cpn v-on:item-click="itemClick"></cpn>
</div>
```

然后利用监听事件获得对象：

```js
  //root组件（父组件）
  let app = new Vue({
    el: '#app',
    data: {

    },
    components:{
      //将子组件注册到父组件里
      cpn:cpnConstructor
    },
    methods: {
      itemClick(item) {
        console.log('父组件---->',item);
      }
    },
```

## 33、父传子、子传父之间的区别

父组件传子组件是利用props传递：在父组件里利用v-bind将父组件里的数据主动绑定到子组件上。父传子是子被动集成父组件数据。

子组件传父组件是利用\$emit传递：在子组件里利用​this.\$emit主动发射事件，然后父组件里监听该事件。子传父是子主动发射事件。

## 34、父组件访问子组件中数据

开发的过程中假如我们需要在父组件中直接使用子组件的东西那么我们就需要直接访问到子组件内部，Vue提供了两种方法供父组件访问子组件，`$children`和`$refs`

1. 父组件利用`$children`访问子组件

   ```html
   <body>
   
   <!--父组件模板-->
   <div id="app">
     <cpn></cpn>
     <cpn></cpn>
     <cpn></cpn>
     <button @click="btnClick">按钮</button>
   </div>
   
   <!--子组件模板-->
   <template id="cpn">
     <div>
       <h3>我是子组件</h3>
     </div>
   </template>
   <script src="../js/vue.js"></script>
   <script>
   
     // 子组件
     let cpnConstructor = Vue.extend({
       template: '#cpn',
       data() {
         return {
           message: '我是子组件的message',
         }
       },
       methods: {
         showMessage() {
           console.log('我是子组件的showMessage()');
         }
       },
     });
   
     // 父组件
     let app = new Vue({
       el: '#app',
       data: {
       },
       components:{
         //在父组件中注册子组件
         cpn: cpnConstructor
       },
       methods: {
         btnClick() {
           console.log(this.$children);// 子组件对象数组
           console.log(this.$children[0].message);// 第一个子组件对象的message属性
           this.$children[0].showMessage();// 调用第一个子组件对象的showMessage()方法
         }
       },
     });
   </script>
   
   </body>
   ```

   我们可以在父组件里使用`this.$children`拿到在这个父组件里使用的子组件对象数组，然后直接通过调用第几个子组件对象的属性或者方法就可以直接访问子组件。只需要记住`this.$children`拿到的是子组件对象数组就好了。

2. 父组件里用`$refs`访问子组件

   ```html
   <body>
   
   <!--父组件模板-->
   <div id="app">
     <cpn ref="cpn1"></cpn>
     <cpn ref="cpn2"></cpn>
     <cpn ></cpn>
     <button @click="btnClick">按钮</button>
   </div>
   
   <!--子组件模板-->
   <template id="cpn">
     <div>
       <h3>我是子组件</h3>
     </div>
   </template>
   <script src="../js/vue.js"></script>
   <script>
   
     // 子组件
     let cpnConstructor = Vue.extend({
       template: '#cpn',
       data() {
         return {
           message: '我是子组件的message',
         }
       },
       methods: {
         showMessage() {
           console.log('我是子组件的showMessage()');
         }
       },
     });
   
     // 父组件
     let app = new Vue({
       el: '#app',
       data: {
       },
       components:{
         //在父组件中注册子组件
         cpn: cpnConstructor
       },
       methods: {
         btnClick() {
           console.log(this.$refs.cpn1); // 拿到ref为cpn1的子组件对象
           console.log(this.$refs.cpn1.message); // 拿到子组件对象里的message属性
           this.$refs.cpn1.showMessage(); // 调用子组件对象里的showMessage()方法
         }
       },
     });
   </script>
   
   </body>
   ```

   如果在使用子组件的地方指定`ref`属性（相当于给这个组件设置一个id，下文就需要根据这个id来取），在父组件里使用`this.$refs.+ref名`，比如`this.$refs.cpn1`就是取上文ref为cpn1的子组件，然后再通过.message或者.showMessage()调用该组件里的属性或者方法。

这两种方法可以混合使用，但是开发中建议使用第二种，毕竟直接指定名字取比循环遍历取方法快捷并且易于维护。

## 35、子组件访问父组件中数据

同父组件访问子组件类似，子组件访问父组件也是利用`this.$parent`和`this.$root`访问。两者的区别在于`this.$parent`访问的是父组件，而`this.$root`访问的是根组件（顶层的Vue实例）。

## 36、slot插槽的基本使用

在组件化开发中，我们可能会尽量地避免重复地去写某一个组件，有的时候有的组件可以复用的话尽量还是会选择复用。但是复用的话其实这两个需要用到这个组件的地方肯定还是会有不同的地方，这个时候我们就要用到插槽。插槽就是给同一个组件里动态填充不同的小部件、小标签。比如：

```html
<template id="cpn">
  <div>
    <h2>我是子组件</h2>
    <!--在组件中预留插槽-->
    <slot></slot>
  </div>
</template>
```

我定义了一个cpn的模板，里面有一个`<slot>`标签，这个就是给这个组件预留的插槽，外部在使用的时候就直接动态放入想要显示的东西就行了。其余部分就是组件共有的。

直接在需要的地方使用就可以了，注意需要包围到该组件标签的中间：就是包围到`<cpn></cpn>`的中间。

```html
<div id="app">
  <!--在cpn内部使用标签就会自动填充到slot插槽里了-->
  <cpn><button>我是插槽1的按钮</button></cpn>
  <cpn><span>我是插槽2的span标签</span></cpn>
  <cpn><p>我是插槽3的p标签</p></cpn>
</div>
```

相应的，这三个标签就会动态地插入到slot的插槽里面了。同时还可以给slot插槽指定默认标签（如果外部没有指定标签，就会使用默认标签），同样也是包围在`<slot></slot>`标签中间。比如：

```html
<template id="cpn">
  <div>
    <h2>我是子组件</h2>
    <!--在组件中预留插槽-->
    <slot><p>我是子组件slot插槽里的默认标签</p></slot>
  </div>
</template>
```

在使用的时候就会使用slot标签中默认的标签进行填充。

```html
<div id="app">
  <!--在cpn内部使用标签就会自动填充到slot插槽里了-->
  <cpn><button>我是插槽1的按钮</button></cpn>
  <cpn><span>我是插槽2的span标签</span></cpn>
  <cpn><p>我是插槽3的p标签</p></cpn>
  <!--没有给cpn指定标签，那么就会使用默认标签-->
  <cpn></cpn>
</div>
```

## 37、slot具名插槽

假如说一个组件里有多个插槽，从外部想要给指定插槽添加东西的话就需要用到具名插槽。让一个slot变成具名插槽只需要给slot加上name属性就可以了，比如：

```html
<template id="cpn">
  <div>
    <h3>我是子组件</h3>
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
    <slot><p>我是没有具名的插槽</p></slot>
  </div>
</template>
```

在外部使用的时候加上slot属性，就可以给指定的插槽添加标签了，如果没有指定slot属性，那么在添加标签的时候也会向没有具名的插槽添加，比如：

```html
<div id="app">
  <cpn>
    <!--p标签包括标签里的内容会替换没有具名的插槽-->
    <p>我会替换没有具名的插槽</p>
    <!--button标签包括标签里的内容会替换名为left的插槽-->
    <button slot="left">我会替换left插槽</button>
    <i slot="center">我会替换center插槽</i>
    <p slot="right">我会替换right插槽</p>
  </cpn>
</div>
```

## 38、slot作用域插槽

有些时候我们会在组件的插槽里写好样式的标签，可是有的时候我们有需要在组件的外部自定义组件的样式的标签，但是数据仍然使用组件本身的数据，就需要使用作用域插槽。

```html
<!--子组件模板-->
<template id="cpn">
  <div>
    <!--将movies绑定到data（自定义变量名）上，暴露给外部（外部通过data来获取）-->
    <slot :data="movies">
      <!--slot插槽里默认是ul>li循环遍历-->
      <ul>
        <li v-for="(item,index) in movies">{{index}}-{{item}}</li>
      </ul>
    </slot>
  </div>
</template>
```

在slot插槽里指定`:data="movies"`属性（data是自定义的，方便外部获取），movies就是这个组件里的数据。

```html
<div id="app">
  <!--使用默认的组件-->
  <cpn></cpn>
  <!--使用组件并且向组件插槽里自定义标签-->
  <cpn>
    <!--获得组件的slot插槽-->
    <template slot-scope="slot">
      <!--循环遍历slot插槽里的data数组-->
      <span v-for="item in slot.data">{{item}} - </span>
    </template>
  </cpn>
</div>
```

在用到该组件的`<cpn></cpn>`标签里利用template标签，然后slot-scope属性绑定slot插槽，然后利用`slot.data`获得刚刚在组件里向外部暴露的数据，然后再进行遍历。

**总结：**作用域插槽就是能够在组件的外部自定义样式标签，然后外部使用组件里的插槽里的数据。

外部使用template标签里的slot-scope获得slot插槽。

内部使用:data来绑定组件里的数据。

## 39、JavaScript模块化开发思想

因为现在流行分工合作开发，所以难免会多人合作，所以多人合作的时候每个人都会有自己的模块，就会创建自己的js文件，这样提高了代码的可维护性和易读性，分工合作开发是主流也是趋势。但是这样时候就会陷入一个问题，就是因为js的特性，所有的js文件的作用域是在同一个，甚至在ES5以前，还没有let局部变量，所有的变量都是var全局变量，所以多人开发就极易导致变量或者函数重名，给程序带来灾难性毁灭。

所以就引入了模块化开发。所谓模块化开发思想就是多人合作小组成员各自专注自己的代码，降低代码之间的耦合，提高开发效率。

## 40、ES6模块化开发

ES6规范是直接支持模块化开发的，而不用像CommonJS一样还需要依赖。模块化开发最需要解决的问题就是单个模块里自己需要暴露给其他模块和在自己模块引入其他模块。所以需要解决的核心问题就是导出（export）和引入（import）。

1. 在html里直接用script标签引入，type类型必须指定为module（模块）

   ```html
   <body>
   <!--模块化引入module1.js文件-->
   <script src="module1.js" type="module"></script>
   <!--模块化引入module2.js文件-->
   <script src="module2.js" type="module"></script>
   </body>
   ```

2. 在module1.js里导出

   ```js
   //定义变量
   let name='模块1';
   let age=18;
   
   //定义函数
   function sum(num1,num2) {
     return num1+num2;
   }
   
   //定义类
   class User {
     constructor() {}
   }
   
   //导出（暴露）
   export {
     name,age,sum,User
   }
   ```

   用 `export { 变量名/函数名/类名 }`导出

3. 在module2.js里导入

   ```js
   "use strict";
   //从module1.js文件里导入name,age,sum,obj
   import {name,age,sum,User} from "./module1.js";
   
   console.log(name);
   console.log(age);
   console.log(sum(20,30));
   console.log(User);
   ```

就感觉上相当于模块中利用export把变量、函数、类导入到一个池中，然后再在需要的模块里利用import来导入。

![image-20201010174013475](E:\吴青珂\大三\JavaEE\笔记\vue\image-20201010174013475.png)

## 41、ES6模块化开发导出和导入的几种方式

除了上述的直接利用

```js
export{
  变量,函数,类
}
```

的方式导出，还有下面的方式可以进行导出：

```js
export let name='模块1';
export let age=18;
export function sum(num1,num2) {
  return num1+num2;
}
export let obj={
  constructor(){}
}
```

直接在定义的时候就在前面加上export关键字就能导出了。还可以利用

```js
let name='模块1';
export default name;
```

利用export default导出的话表示该模块只能导出一个，然后在需要导入的模块就直接利用

```js
import test from "./module1.js";

console.log(test);
```

导入就可以了，因为导出的时候只能导出一个，所以导入的时候也就可以随便自定义名字了。

最后一中导入方式，就是利用：

```js
import * as module1 from "./module1.js";

console.log(module1.name);
console.log(module1.age);
console.log(module1.sum(20,30));
console.log(module1.User);
```

从module1.js文件里导入所有东西，然后取module1为别名，然后再利用module1.name或者.age获得模块里的内容。

## 42、利用webpack配置vue

关于webpack的介绍和使用可以参照这篇文章：                                                                                                                                                    https://blog.csdn.net/weixin_45747080/article/details/109166069

webpack和Vue进行结合的话仍然需要以下几步：

1. 利用npm命令安装vue

   ```shell
   npm install vue@2.5.21 --save
   ```

   因为我们在项目开发和项目上线的环境中都需要用到vue，所以这里就不用指定`-dev`

2. 写vue的代码

   依旧是在index.html写

   ```html
   <!--vue实例-->
   <div id="app">
     <h2>{{message}}</h2>
   </div>
   ```

   在js里先引入vue然后在创建vue实例

   ```js
   import Vue from 'vue'
   
   let app = new Vue({
     el:'#app',
     data:{
       message:'Hello,webpack and vue!',
     }
   });
   ```

   我们利用npm安装好vue后就可以直接利用import从项目根目录导入vue了

3. 在webpack.config.js里配置

   ```js
   
   //从node的系统模块中获得path
   const path=require('path');
   
   //指定webpack打包的起点（来源）和终点（目的地）
   module.exports={
     //起点字符串路径
     entry:'./src/main.js',
     //终点对象
     output:{
       //路径（拼接字符串）
       path:path.resolve(__dirname,'dist'),
       //生成的文件名
       filename:'bundle.js',
     },
     resolve:{
       alias:{
         // 将vue映射到runtime-compiler（vue.esm.js里包含能够编译template的compiler）
         'vue$':'vue/dist/vue.esm.js'
       }
     }
   };
   ```

   依旧是需要配置导出导入的起点和终点。但是同时需要注意的是需要配置：

   ```js
     resolve:{
       alias:{
         // 将vue映射到runtime-compiler（vue.esm.js里包含能够编译template的compiler）
         'vue$':'vue/dist/vue.esm.js'
       }
     }
   ```

   如果没有配置这个，那么vue只能在运行环境中使用，在编译的过程中就无法编译template，所以必须在webpack的配置文件里配置这一项。

4. 利用webpack将整个项目打包

   ```shell
   npm run build
   ```


## 43、Vue CLI脚手架的介绍

CLI（Commend-Line Interface）：命令行界面。

Vue CLI是Vue官方推出的命令行界面的项目构建工具，俗称脚手架。脚手架简化了webpack的配置，变得更方便。

## 44、Vue CLI的安装

1. 脚手架的安装依旧依赖webpack：

   ```shell
   npm install -g @vue/cli
   ```

   全局安装vue，因为vue2.x的版本的命令不同于现在，所以@vue/cli实际上是安装的vue3.x及其以上的版本。

2. 拉取vue2.x的模板

   虽然我们用的脚手架是3.0以上，但是我们如果需要利用2.x的方式初始化项目是不可以的，除非拉取2.x的模板：

   ```shell
   npm install -g @vue/cli-init
   ```

   依旧是全局安装@vue/cli-init
   
3. 创建vue项目

   你既可以利用vue2.x创建项目也可以利用vue3.x创建项目

   - vue2.x命令

     ```shell
     vue init webpack 项目名称
     ```

     

   - vue3.x命令

     ```shell
     vue create 项目名称
     ```

     

## 45、利用vue CLI创建vue项目

直接使用vue2.x的命令创建项目：

```shell
vue init webpack vue-test
```

就可以创建一个名为vue-test的vue项目了

![image-20201020182552291](E:\吴青珂\大三\JavaEE\笔记\vue\image-20201020182552291.png)

打开我们刚刚新建好的项目我们可以看到vue2.x的目录结构如下：

![image-20201021152508040](E:\吴青珂\大三\JavaEE\笔记\vue\image-20201021152508040.png)

## 46、vue cli构建方式runtime-compiler和runtime-only的区别

从main.js的代码来看，这两种构建方式差距并不大：

runtime-compiler的main.js：

```js
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'					//template
})
```

runtime-only的main.js：

```js
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)					//render函数
})
```

因为vue渲染页面的时候会将template解析成ast（抽象语言树）然后再利用render函数解析成virtuldom（虚拟dom）然后再渲染成UI。所以runtime-only就直接跳过了前两步，直接利用render函数解析成虚拟dom然后渲染到页面。所以runtime-only的效率会比runtime-compiler效率高，并且由于减少了解析template的代码，所以runtime-only构建的项目也会更小。所以真实开发中更倾向于用runtime-only

## 47、利用vue-cli3创建项目

之前我们利用vue-cli2理解了vue创建项目的原理以及众多配置文件，然而vue-cli3减少了很多配置文件，方便了许多。这里我们利用vue-cli3创建vue项目：

```shell
vue create 项目名称
```

然后就可以看到依旧是在创建项目前需要选择的选项：

![image-20201021182647310](E:\吴青珂\大三\JavaEE\笔记\vue\image-20201021182647310.png)

利用vue-cli3创建完项目后可以发现与之前的项目结构目录有所不同：

![image-20201022122952874](E:\吴青珂\大三\JavaEE\笔记\vue\image-20201022122952874.png)

利用vue-cli3创建的项目比vue-cli2简化了许多。并且因为vue-cli3支持GUI，所以我们可以直接在全局终端输入：

```shell
vue ui
```

从而直接打开vue-cli3自带的可视化项目管理界面：

![image-20201022143124750](E:\吴青珂\大三\JavaEE\笔记\vue\image-20201022143124750.png)

你可以直接在网页里管理项目的插件和依赖以及项目的相关配置，甚至还可以直接启动项目。

## 48、在Vue中的前端路由思想

所谓后端路由就是用户在浏览器地址请求url然后后端的controller就会跳转到对应的这个url请求的页面。

前端路由则是用户在浏览器地址请求url的时候服务器就会一次性把所有的静态资源都给请求下来了（html+css+js），然后在前端里通过js里写一些判断逻辑然后将对应的html页面加载出来。甚至单页面富应用的话就只请求一个html页面，但是后续切换页面的时候则会直接利用js生成新的html代码从而加载到页面上。

## 49、在前端不刷新页面从而改变浏览器url

在js中前端想要请求到新的页面需要使用`windows.href='url'`方法会跳转到对应的页面并且浏览器的url页面相应改变，但是这样每请求一个页面就会刷新一次页面，每重新刷新一次页面就会重新向后端发起一次请求。这样不太符合前端路由的思想，于是有了`windows.hash='url'`，这样可以直接修改页面的url但是不会重新刷新页面。

同时还有一种方法`history.pushState(data,title,url)`是类似栈的结构，可以改变页面的url，但是不会刷新页面，同时遵循先进后出的规则。使用浏览器的返回按键或者`history.back()`或者`history.go(-1)`就可以返回上一页，实际上也就是出栈。同时也可以使用浏览器的前进按钮或者`history.forward()`或者`history.go(1)`前进的前一页。

## 50、vue-router的安装和配置

在vue中，vue-router就是用来负责前端路由的映射的官方组件。

安装vue-router可以在利用vue-cli创建项目的时候选择要安装vue-router或者在项目里直接使用：

```shell
npm install vue-router --save
```

此时你就需要在项目的src文件夹里面创建一个router文件夹，再新建一个index.js文件来配置路由映射的相关东西：

```js
// 1、引入vue-router和vue
import VueRouter from 'vue-router';
import Vue from 'vue';

// 2、用vue.use()全局使用vue-router插件
Vue.use(VueRouter);

// 3、创建vue-router对象（和创建Vue实例类似）
const router = new VueRouter({
  //配置路由和页面的映射关系
  routes:[

  ]
});

// 4、导出（暴露）给外部，使得Vue能够使用它
export default router;

```

因为我们肯定需要用到vue和vue-router，所以我们先引入他们，然后再用`Vue.use()`全局使用vue-router插件，其他插件也需要使用`Vue.use()`来启用。然后再创建router实例对象，里面得routes里配置路由和页面的映射关系。最后再export导出router对象以使得Vue能够接收。

main.js：

```js
import Vue from 'vue'
import App from './App'
// 从router/index.js里导入路由组件
import Router from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  render: h => h(App)
})

```

## 51、利用vue-router切换页面

1. 首先我们先创建两个页面（也就是vue的组件）

   Home.vue：

   ```vue
   <template>
     <div>
       <h2>{{title}}</h2>
       <p>{{content}}</p>
     </div>
   </template>
   
   <script>
     export default {
       name: "Home",
       data() {
         return {
           name: '主页',
         }
       },
       computed: {
         title() {
           return '我是'+this.name+'的标题';
         },
         content() {
           return '我是'+this.name+'的内容';
         }
       },
     }
   </script>
   
   <style scoped>
   
   </style>
   
   ```

   About.vue：

   ```vue
   <template>
     <div>
       <h2>{{title}}</h2>
       <p>{{content}}</p>
     </div>
   </template>
   
   <script>
     export default {
       name: "About",
       data() {
         return {
           name: '关于',
         }
       },
       computed: {
         title() {
           return '我是'+this.name+'的标题';
         },
         content() {
           return '我是'+this.name+'的内容';
         }
       },
     }
   </script>
   
   <style scoped>
   
   </style>
   
   ```

   

2. 将这个两个组件在router里面引入并且配置映射关系

   ```js
   
   // 1、引入vue-router和vue
   import VueRouter from 'vue-router';
   import Vue from 'vue';
   
   // 将两个页面导入
   import Home from "../components/Home";
   import About from "../components/About";
   
   // 2、用vue.use()全局使用vue-router插件
   Vue.use(VueRouter);
   
   // 3、创建vue-router对象（和创建Vue实例类似）
   const router = new VueRouter({
     //配置路由和页面的映射关系
     routes:[
       {
         // 输入/home时就会跳转到Home页面
         path: '/home',
         component: Home
       },
       {
         // 输入/about时就会跳转到About页面
         path: '/about',
         component: About
       },
     ]
   });
   
   // 4、导出（暴露）给外部，使得Vue能够使用它
   export default router;
   
   ```

   需要利用import将需要用到的页面先提前导入，然后再在routes数组里配置path和component的映射关系。

   **Tips：**需要导出的对象叫router路由对象，需要配置映射关系的是route，只不过是它的复数routes

3. 在需要显示的页面里利用router标签显示

   最后在App.vue里利用router标签显示

   App.vue：

   ```vue
   <template>
     <div id="app">
       <!--去首页的超链接-->
       <router-link to="/home">首页</router-link>
       <!--去关于的超链接-->
       <router-link to="/about">关于</router-link>
       <!--显示内容-->
       <router-view/>
     </div>
   </template>
   ```

   router-link标签就是供点击的超链接，其中的to属性就是跳转到某个页面，它会被渲染成一个a标签

   router-view就是表示这个组件将在这里显示，有点类似html的iframe

   ![image-20201023123710668](E:\吴青珂\大三\JavaEE\笔记\vue\image-20201023123710668.png)

## 52、利用路由修改网站主页

我们观察到即使加了vue-router进入页面仍然需要点击，包括进入主页也是，但是正常的逻辑应该是进入主页后自动显示的，所以vue-router中利用修改`/`的path然后重定向到主页的方法就可以了：

```js
  routes: [
    {
      //网站进去的第一个页面
      path: '/',
      // 重定向到/home的url
      redirect: '/home'
    },
    {
      // 输入/home时就会跳转到Home页面
      path: '/home',
      component: Home
    },
    {
      // 输入/about时就会跳转到About页面
      path: '/about',
      component: About
    },
  ],
```

在routes里面配置一个新的对象，path为`/`（主页，或者直接为空也可以），然后重定向到主页的url

## 53、将url的显示模式从hash模式修改到history模式

![image-20201025161403190](E:\吴青珂\大三\JavaEE\笔记\vue\image-20201025161403190.png)

可以看到vue-router的url默认显示模式是采用的hash显示格式，很显然这不符合我们的常规，所以，我们可以在routes里配置一个mode，将它的默认修改为`history`，像这样：

```js
routes: [
    {
      //网站进去的第一个页面
      path: '/',
      // 重定向到/home的url
      redirect: '/home'
    },
    {
      // 输入/home时就会跳转到Home页面
      path: '/home',
      component: Home
    },
    {
      // 输入/about时就会跳转到About页面
      path: '/about',
      component: About
    },
  ],
  // 将默认的url显示默认修改为history
  mode: 'history'
```

## 54、修改router-link渲染后的标签

因为默认router-link会被渲染成a标签，但是我们可以给它添加tag属性，值为button或者div或者li就会被渲染成指定的属性，比如：

```vue
<template>
  <div id="app">
    <!--去首页的超链接-->
    <router-link to="/home" tag="button">首页</router-link>
    <!--去关于的超链接-->
    <router-link to="/about" tag="button">关于</router-link>
    <!--显示内容-->
    <router-view/>
  </div>
</template>
```

就会被渲染成button，再比如：

```vue
<template>
  <div id="app">
    <!--去首页的超链接-->
    <router-link to="/home" tag="li">首页</router-link>
    <!--去关于的超链接-->
    <router-link to="/about" tag="li">关于</router-link>
    <!--显示内容-->
    <router-view/>
  </div>
</template>
```

就会被渲染成li标签。

其实你直接将router-link里的内容改对应的标签也可以，比如我修改成按钮：

```vue
<template>
  <div id="app">
    <!--去首页的超链接-->
    <router-link to="/home"><button>首页</button></router-link>
    <!--去关于的超链接-->
    <router-link to="/about"><button>关于</button></router-link>
    <!--显示内容-->
    <router-view/>
  </div>
</template>
```

## 55、router-link里的replace属性

```vue
<template>
  <div id="app">
    <!--去首页的超链接-->
    <router-link to="/home" tag="button" replace>home</router-link>
    <!--去关于的超链接-->
    <router-link to="/about" tag="button" replace>about</router-link>
    <!--显示内容-->
    <router-view/>
  </div>
</template>
```

给router-link里添加replace属性后那么通过点击该标签产生的history就不能再回溯了。意思就是不能通过history.back()或者history.forward()方法后退和前进。

## 56、router-link的动态活跃属性

因为router-link可以被用作为导航栏，一般用到导航栏就涉及到正在被点击事件，如果正在被点击事件那么这个router-link就拥有一个默认属性`class="router-link-active"`，我们就可以通过给router-link-active这个属性添加样式就可以达到我们想要的效果了。但是如果你觉得这个属性名太长了，你可以自定义，利用：

```vue
<template>
  <div id="app">
    <!--去首页的超链接-->
    <router-link to="/home" tag="button" active-class="active">home</router-link>
    <!--去关于的超链接-->
    <router-link to="/about" tag="button" active-class="active">about</router-link>
    <!--显示内容-->
    <router-view/>
  </div>
</template>
```

给router-link添加一个active-class属性，属性值就是你自定义的该标签被选中的名字，只要该标签被选中那么就会有你自定义的这个class属性。但是这有点不方便的就是假如你的router-link标签过多你需要自己一个一个添加active-class，那么你可以尝试在routes里配置linkActiveClass：

```js
  //配置路由和页面的映射关系
  routes: [
    {
      //网站进去的第一个页面
      path: '/',
      // 重定向到/home的url
      redirect: '/home'
    },
    {
      // 输入/home时就会跳转到Home页面
      path: '/home',
      component: Home
    },
    {
      // 输入/about时就会跳转到About页面
      path: '/about',
      component: About
    },
  ],
  // 将默认的url显示默认修改为history
  mode: 'history',
  // router-link被选中时添加class属性active
  linkActiveClass: 'active'
```

这样也可以达到你的router-link被选中时自动添加class属性active，就不需要你一个一个手动添加active-class为active了。

## 57、利用vue的内置对象$router来实现router-link

假如我们不想通过router-link标签来切换页面，我们同时也可以采用监听点击事件然后使用vue的内置对象\$router的方式来切换页面。

```vue
<template>
  <div id="app">

    <button @click="toHome">首页</button>
    <button @click="toAbout">关于</button>

    <!--显示内容-->
    <router-view/>
  </div>
</template>
```

在页面里通过button来监听事件，然后在事件里：

```js
export default {
  name: 'App',
  methods: {
    toHome() {
      // 去/home
      this.$router.push('/home');
    },
    toAbout() {
      // 去/about
      this.$router.push('/about');
    }
  },
}
```

利用`this.$router.push()`来跳转到对应的页面。

## 58、利用vue-router实现动态路由

假如现在我需要一个页面，页面上的内容需要显示的是给用户打招呼，需要在页面上显示用户的用户名，所以这个时候肯定需要动态地获取用户的名字。

1. 需要先创建一个组件，叫user

   ```vue
   <template>
     <div>
       <h2>你好！{{username}}</h2>
       <p>我是用户界面</p>
     </div>
   </template>
   
   <script>
     export default {
       name: "User",
       computed: {
         // 需要动态获取的
         username() {
             
         }
       },
     }
   </script>
   
   <style scoped>
   
   </style>
   
   ```

   

2. 在路由的routes中引入并配置好这个页面

   ```js
   
   // 1、引入vue-router和vue
   import VueRouter from 'vue-router';
   import Vue from 'vue';
   
   // 将两个页面导入
   import Home from "../components/Home";
   import About from "../components/About";
   import User from "../components/User";
   
   // 2、用vue.use()全局使用vue-router插件
   Vue.use(VueRouter);
   
   // 3、创建router对象并且导出
   export default new VueRouter({
     //配置路由和页面的映射关系
     routes: [
       {
         //网站进去的第一个页面
         path: '/',
         // 重定向到/home的url
         redirect: '/home'
       },
       {
         // 输入/home时就会跳转到Home页面
         path: '/home',
         component: Home
       },
       {
         // 输入/about时就会跳转到About页面
         path: '/about',
         component: About
       },
       {
         // :冒号后面的内容表示需要动态获取
         path: '/user/:userId',
         component: User
       }
     ],
     // 将默认的url显示默认修改为history
     mode: 'history',
     // router-link被选中时添加class属性active
     linkActiveClass: 'active'
   });
   
   ```

   在路由的index.js里引入user组件并且在routes中配置好user这个组件，并且在path中加上:userId表示userId是可以动态获取的。

3. 加上router-link使其能够访问到这个页面

   ```vue
   <template>
     <div id="app">
   
       <!--去首页的超链接-->
       <router-link to="/home" tag="button">主页</router-link>
       <!--去关于的超链接-->
       <router-link to="/about" tag="button">关于</router-link>
   
       <router-link :to="'/user/'+userId" tag="button">我的</router-link>
   
       <!--显示内容-->
       <router-view/>
     </div>
   </template>
   ```

   在前往user这个页面的router-link里加上v-bind:to（表示动态获取userId），这个userId就从这个页面的data中来。

4. 在user这个页面中获取到想要显示的内容

   ```js
     computed: {
         // 需要动态获取username
         username() {
           let userId=this.$route.params.userId;
           console.log(userId);
           if (userId==10){
             return '张三';
           }else {
             return '李四';
           }
         }
       },
   ```

   最后再在user这个组件的computed里利用this.\$route.params.userId获取到刚刚从router-link里动态绑定的userId。

   **Tips：**this.\$route.params的作用就是获取到目前活跃的路由页面，也就是正在被点击的这个页面里的参数。

## 59、路由懒加载

因为前端路由的思想就是尽量一次性将前端静态资源获取下来，然后再通过路由来判断跳转到对应的页面。但是有个问题就是假如说前端的静态资源代码过多，那么获取的时长就会很长，给用户带来的体验就很不好。所以，这个时候我们就可以使用路由懒加载。

懒加载，顾名思义就是用到的时候再加载。因为前端路由可以跳转到不同的页面，所以我们可以尝试再跳转到某个页面的时候再去获取到这个页面的对应的组件代码，这样就不会一次性获取大量的代码，给用户带来不好的体验。做法挺简单的，在路由的index.js里不再采用之前的`import User from "../components/User";`而是采用`const Home = () => import('../components/Home');`这样就可以达到通过前端路由跳转到某个页面然后再获取这个页面对应的静态资源了：

```js

// 1、引入vue-router和vue
import VueRouter from 'vue-router';
import Vue from 'vue';

// 利用懒加载的方式加载页面
const Home = () => import('../components/Home');
const About = () => import('../components/About');
const User = () => import('../components/User');

// 2、用vue.use()全局使用vue-router插件
Vue.use(VueRouter);

// 3、创建router对象并且导出
export default new VueRouter({
  //配置路由和页面的映射关系
  routes: [
    {
      //网站进去的第一个页面
      path: '/',
      // 重定向到/home的url
      redirect: '/home'
    },
    {
      // 输入/home时就会跳转到Home页面
      path: '/home',
      component: Home
    },
    {
      // 输入/about时就会跳转到About页面
      path: '/about',
      component: About
    },
    {
      path: '/user/:userId',
      component: User
    }
  ],
  // 将默认的url显示默认修改为history
  mode: 'history',
  // router-link被选中时添加class属性active
  linkActiveClass: 'active'
});

```



## 60、vue-router路由嵌套

有的时候需要在路由里面继续添加路由的话就需要给路由添加子路由了，比如：

```js
  {
      // 输入/home时就会跳转到Home页面
      path: '/home',
      component: Home,
      // 子路由组件
      children:[
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
```

我给home添加了两个子路由，一个叫news一个叫message（注意前面不能加`/`），不然就会变成绝对路径，然后再懒加载引入组件就可以了，这样就可以通过`/home/news`和`/home/message`这两个url进行访问了。此时假如我仍然需要给这个子路由添加一个首页的话就仍然需要利用重定向到news这个path：

```js
  {
      // 输入/home时就会跳转到Home页面
      path: '/home',
      component: Home,
      // 子路由组件
      children:[
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
```

虽然我们配置好了路由，但是我们仍然需要在页面上通过router-link点击跳转到对应的页面，然后需要一个router-view来使得内容显示出来。所以我们需要在用到的页面，也就是Home这个页面（组件）里：

```vue
<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{content}}</p>

    <router-link to="/home/news">查看新闻</router-link>
    <router-link to="/home/message">查看消息</router-link>
    <router-view/>

  </div>



</template>
```

注意，这里的路径需要加上绝对路径的全路径。

## 61、vue-router利用query来传递对象参数

有的时候我们想要通过路由来传递参数的时候很多时候可能不止传一个参数，甚至会传递一个对象。这个时候我们就可以利用query来传递：

```vue
    <!--利用query传递对象参数-->
    <router-link :to="{ path: '/profile', query: { name: '张三', age:18 } }" tag="button">我的</router-link>
```

在:to里加上一个对象，然后对象里有路径，和需要传递的对象，然后在另一个页面利用`$route.query`获取到传递的query对象：

```vue
<template>
  <div>
    <h2>我是profile组件</h2>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
  </div>
</template>
```

