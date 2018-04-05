<template>
  <div class="notice">
     <h1>Notice</h1>
       <div class="box">
         <h2>Alert 警告</h2>
         <p><b>基本用法</b></p>
         <template>
          <el-alert title="成功提示的文案" type="success" style="margin-bottom:10px;"></el-alert>
          <el-alert title="消息提示的文案" type="info" style="margin-bottom:10px;"></el-alert>
          <el-alert title="警告提示的文案" type="warning" style="margin-bottom:10px;"></el-alert>
          <el-alert title="错误提示的文案" type="error" style="margin-bottom:10px;"></el-alert>
        </template>
        <p><b>自定义关闭按钮</b></p>
        <p>在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。closable属性决定是否可关闭，接受boolean，默认为true。你可以设置close-text属性来代替右侧的关闭图标，注意：close-text必须为文本。设置close事件来设置关闭时的回调。</p>
        <template>
          <el-alert title="不可关闭的 alert" type="success" :closable="false" style="margin-bottom:10px;"></el-alert>
          <el-alert title="自定义 close-text" type="info" close-text="知道了" style="margin-bottom:10px;"></el-alert>
          <el-alert title="设置了回调的 alert" type="warning" @close="hello" style="margin-bottom:10px;"></el-alert>
        </template>
        <p><b>带有 icon</b></p>
        <p>表示某种状态时提升可读性。</p>
        <template>
          <el-alert title="成功提示的文案" type="success" show-icon style="margin-bottom:10px;"></el-alert>
          <el-alert title="消息提示的文案" type="info" show-icon style="margin-bottom:10px;"></el-alert>
          <el-alert title="警告提示的文案" type="warning" show-icon style="margin-bottom:10px;"></el-alert>
          <el-alert title="错误提示的文案" type="error" show-icon style="margin-bottom:10px;"></el-alert>
        </template>
        <p><b>文字居中</b></p>
        <template>
          <el-alert title="成功提示的文案" type="success" center show-icon style="margin-bottom:10px;"></el-alert>
          <el-alert title="消息提示的文案" type="info" center show-icon style="margin-bottom:10px;"></el-alert>
          <el-alert title="警告提示的文案" type="warning" center show-icon style="margin-bottom:10px;"></el-alert>
          <el-alert title="错误提示的文案" type="error" center show-icon style="margin-bottom:10px;"></el-alert>
        </template>
        <p><b>带有 icon 和辅助性文字介绍</b></p>
        <template>
          <el-alert  title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon style="margin-bottom:10px;"></el-alert>
          <el-alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon style="margin-bottom:10px;"></el-alert>
          <el-alert title="警告提示的文案" type="warning" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon style="margin-bottom:10px;"></el-alert>
          <el-alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon style="margin-bottom:10px;"></el-alert>
        </template>
       </div>
       <div class="box">
         <h2>Loading 加载</h2>
         <p><b>区域加载</b>在表格等容器中加载数据时显示。</p>
         <p>Element 提供了两种调用 Loading 的方法：指令和服务。对于自定义指令v-loading，只需要绑定Boolean即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加body修饰符，可以使遮罩插入至 DOM 中的 body 上。</p>
         <template>
          <el-table  v-loading="loading" :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </template>
        <p><b>自定义</b>可自定义加载文案、图标和背景色。</p>
        <p>在绑定了v-loading指令的元素上添加element-loading-text属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，element-loading-spinner和element-loading-background属性分别用来设定图标类名和背景色值。</p>
        <template>
          <el-table v-loading="loading2" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)" :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </template>
        <p><b>整页加载</b>页面数据加载时显示</p>
        <p>当使用指令方式时，全屏遮罩需要添加fullscreen修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用lock修饰符；当使用服务方式时，遮罩默认即为全屏，无需额外设置。</p>
        <template>
          <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">指令方式</el-button>
          <el-button type="primary"  @click="openFullScreen2">服务方式</el-button>
        </template>
        <p><b>服务------</b></p>
      </div>
      <div class="box">
         <h2>Message 消息提示</h2>
         <p><b>基础用法</b></p>
         <p>Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，可以结合 Notification 的文档理解它们。Element 注册了一个$message方法用于调用，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。</p>
         <template>
          <el-button :plain="true" @click="open">打开消息提示</el-button>
          <el-button :plain="true" @click="openVn">VNode</el-button>
        </template>
        <p><b>不同状态</b></p>
        <p>当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置type字段可以定义不同的状态，默认为info。此时正文内容以message的值传入。同时，我们也为 Message 的各种 type 注册了方法，可以在不传入type字段的情况下像open4那样直接调用。</p>
        <template>
          <el-button :plain="true" @click="open2">成功</el-button>
          <el-button :plain="true" @click="open3">警告</el-button>
          <el-button :plain="true" @click="open">消息</el-button>
          <el-button :plain="true" @click="open4">错误</el-button>
        </template>
        <p><b>可关闭</b></p>
        <p>默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用showClose字段。此外，和 Notification 一样，Message 拥有可控的duration，设置0为不会被自动关闭，默认为 3000 毫秒。</p>
        <template>
          <el-button :plain="true" @click="open5">消息</el-button>
          <el-button :plain="true" @click="open6">成功</el-button>
          <el-button :plain="true" @click="open7">警告</el-button>
          <el-button :plain="true" @click="open8">错误</el-button>
        </template>
        <p><b>文字居中</b></p>
        <p>使用 center 属性让文字水平居中。</p>
        <template><el-button :plain="true" @click="openCenter">文字居中</el-button></template>
        <p><b>使用 HTML 片段</b></p>
        <template><el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button></template>
      </div>
      <div class="box">
         <h2>MessageBox 弹框</h2>
         <p><b>消息提示</b></p>
         <p>当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。</p>
         <p>调用$alert方法即可打开消息提示，它模拟了系统的 alert，无法通过按下 ESC 或点击框外关闭。此例中接收了两个参数，message和title。值得一提的是，窗口被关闭后，它默认会返回一个Promise对象便于进行后续操作的处理。若不确定浏览器是否支持Promise，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。</p>
         <template><el-button type="text" @click="messageOpen">点击打开 Message Box</el-button></template>
         <p><b>确认消息</b></p>
         <p>提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</p>
         <p>调用$confirm方法即可打开消息提示，它模拟了系统的 confirm。Message Box 组件也拥有极高的定制性，我们可以传入options作为第三个参数，它是一个字面量对象。type字段表明消息类型，可以为success，error，info和warning，无效的设置将会被忽略。注意，第二个参数title必须定义为String类型，如果是Object，会被理解为options。在这里我们用了 Promise 来处理后续响应。</p>
         <template><el-button type="text" @click="messageOpen1">点击打开 Message Box</el-button></template>
         <p><b>提交内容</b>当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。</p>
         <p>调用$prompt方法即可打开消息提示，它模拟了系统的 prompt。可以用inputPattern字段自己规定匹配模式，或者用inputValidator规定校验函数，可以返回Boolean或String，返回false或字符串时均表示校验未通过，同时返回的字符串相当于定义了inputErrorMessage字段。此外，可以用inputPlaceholder字段来定义输入框的占位符。</p>
         <template><el-button type="text" @click="messageOpen2">点击打开 Message Box</el-button></template>
         <p><b>自定义</b></p>
         <p>以上三个方法都是对$msgbox方法的再包装。本例直接调用$msgbox方法，使用了showCancelButton字段，用于显示取消按钮。另外可使用cancelButtonClass为其添加自定义样式，使用cancelButtonText来自定义按钮文本（Confirm 按钮也具有相同的字段，在文末的字段说明中有完整的字段列表）。此例还使用了beforeClose属性，它的值是一个方法，会在 MessageBox 的实例关闭前被调用，同时暂停实例的关闭。它有三个参数：action、实例本身和done方法。使用它能够在关闭前对实例进行一些操作，比如为确定按钮添加loading状态等；此时若需要关闭实例，可以调用done方法（若在beforeClose中没有调用done，则实例不会关闭）。</p>
         <template><el-button type="text" @click="messageOpen3">点击打开 Message Box</el-button></template>
         <p><b>使用 HTML 片段</b></p>
         <template><el-button type="text" @click="messageOpen4">点击打开 Message Box</el-button></template>
         <p><b>居中布局</b></p>
         <template><el-button type="text" @click="messageOpen5">点击打开 Message Box</el-button></template>
      </div>
      <div class="box">
         <h2>Notification 通知</h2>
         <p><b>基本用法</b></p>
         <template>
           <el-button plain @click="Notificationopen">可自动关闭</el-button>
           <el-button plain @click="Notificationopen1">不会自动关闭</el-button>
         </template>
         <p><b>带有倾向性</b></p>
         <p>带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息</p>
         <p>Element 为 Notification 组件准备了四种通知类型：success, warning, info, error。通过type字段来设置，除此以外的值将被忽略。同时，我们也为 Notification 的各种 type 注册了方法，可以在不传入type字段的情况下像open5和open6那样直接调用。</p>
         <template>
          <el-button plain @click="Notificationopen2">成功</el-button>
          <el-button plain @click="Notificationopen3">警告</el-button>
          <el-button plain @click="Notificationopen4">消息</el-button>
          <el-button plain @click="Notificationopen5">错误</el-button>
        </template>
        <p><b>自定义弹出位置</b></p>
        <template>
          <el-button plain @click="Notificationopen6">右上角</el-button>
          <el-button plain @click="Notificationopen7">右下角</el-button>
          <el-button plain @click="Notificationopen8">左下角</el-button>
          <el-button plain @click="Notificationopen9">左上角</el-button>
        </template>
        <p><b>带有偏移</b></p>
        <p>Notification 提供设置偏移量的功能，通过设置 offset 字段，可以使弹出的消息距屏幕边缘偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量。</p>
        <template><el-button plain @click="Notificationopen10">偏移的消息</el-button></template>
        <p><b>使用 HTML 片段</b></p>
        <template>
          <el-button plain @click="Notificationopen11">使用 HTML 片段</el-button>
        </template>
        <p><b>隐藏关闭按钮</b></p>
        <template>
          <el-button plain @click="Notificationopen12">隐藏关闭按钮</el-button>
        </template>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Notice',
  data () {
    return {
     tableData:[{
	      date: '2016-05-03',
	      name: '王小虎',
	      address: '上海市普陀区金沙江路 1518 弄'
	    }, {
	      date: '2016-05-02',
	      name: '王小虎',
	      address: '上海市普陀区金沙江路 1518 弄'
	    }, {
	      date: '2016-05-04',
	      name: '王小虎',
	      address: '上海市普陀区金沙江路 1518 弄'
	 }],
     loading:true,
     loading2: true,
     fullscreenLoading: false
    }
  },
  methods: {
	hello() {
	  alert('Hello World!');
	},
	open() {
        this.$message('这是一条消息提示');
    },
    open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
    },
    open3() {
	    this.$message({
	      message: '警告哦，这是一条警告消息',
	      type: 'warning'
	    });
    },
    open4() {
       this.$message.error('错了哦，这是一条错误消息');
    },
    open5() {
        this.$message({
          showClose: true,
          message: '这是一条消息提示'
        });
	},
    open6() {
	    this.$message({
	      showClose: true,
	      message: '恭喜你，这是一条成功消息',
	      type: 'success'
	    });
	},
    open7() {
	    this.$message({
	      showClose: true,
	      message: '警告哦，这是一条警告消息',
	      type: 'warning'
	    });
	},
	open8() {
	    this.$message({
	      showClose: true,
	      message: '错了哦，这是一条错误消息',
	      type: 'error'
	    });
	},
	openCenter() {
        this.$message({
          message: '居中的文字',
          center: true
        });
    },
    openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
    },
    messageOpen(){
       this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
    },
    messageOpen1() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    messageOpen2() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
    },
    messageOpen3() {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
    },
    messageOpen4() {
        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
          dangerouslyUseHTMLString: true
        });
    },
    messageOpen5() {
	    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
	      confirmButtonText: '确定',
	      cancelButtonText: '取消',
	      type: 'warning',
	      center: true
	    }).then(() => {
	      this.$message({
	        type: 'success',
	        message: '删除成功!'
	      });
	    }).catch(() => {
	      this.$message({
	        type: 'info',
	        message: '已取消删除'
	      });
	    });
    },
    openFullScreen() {
	    this.fullscreenLoading = true;
	    setTimeout(() => {
	      this.fullscreenLoading = false;
	    }, 2000);
    },
    openFullScreen2() {
	    const loading = this.$loading({
	      lock: true,
	      text: 'Loading',
	      spinner: 'el-icon-loading',
	      background: 'rgba(0, 0, 0, 0.7)'
	    });
	    setTimeout(() => {
	      loading.close();
	    }, 2000);
    },
    openVn() {
	    const h = this.$createElement;
	    this.$message({
	      message: h('p', null, [
	        h('span', null, '内容可以是 '),
	        h('i', { style: 'color: teal' }, 'VNode')
	      ])
	    });
	},
	Notificationopen(){
	    const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
	},
	Notificationopen1() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
    },
    Notificationopen2() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
    },
    Notificationopen3() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
    },
    Notificationopen4() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
    },
    Notificationopen5() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
    },
    Notificationopen6() {
        this.$notify({
          title: '自定义位置',
          message: '右上角弹出的消息'
        });
    },
    Notificationopen7() {
        this.$notify({
          title: '自定义位置',
          message: '右下角弹出的消息',
          position: 'bottom-right'
        });
    },
    Notificationopen8() {
        this.$notify({
          title: '自定义位置',
          message: '左下角弹出的消息',
          position: 'bottom-left'
        });
    },
    Notificationopen9() {
        this.$notify({
          title: '自定义位置',
          message: '左上角弹出的消息',
          position: 'top-left'
        });
    },
    Notificationopen10() {
        this.$notify({
          title: '偏移',
          message: '这是一条带有偏移的提示消息',
          offset: 100
        });
    },
    Notificationopen11() {
        this.$notify({
          title: 'HTML 片段',
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
    },
    Notificationopen12() {
        this.$notify.success({
          title: 'Info',
          message: '这是一条没有关闭按钮的消息',
          showClose: false
        });
    }

  }
}
</script>