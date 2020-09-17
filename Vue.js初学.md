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



