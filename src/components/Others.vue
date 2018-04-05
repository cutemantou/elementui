<template>
  <div class="others">
      <div class="box">
        <h2>Dialog 对话框</h2>
        <p class="title"><b>基本用法</b></p>
        <p>需要设置visible属性，它接收Boolean，当为true时显示 Dialog。Dialog 分为两个部分：body和footer，footer需要具名为footer的slot。title属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了before-close的用法。</p>
        <p>before-close 仅当用户通过点击关闭图标或遮罩关闭 Dialog 时起效。如果你在 footer 具名 slot 里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 before-close 的相关逻辑。</p>
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
		  <span>这是一段信息</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>


        <p class="title"><b>自定义内容</b></p>
        <p>Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Element Table 和 Form 组件的两个样例。</p>
        <!-- Table -->
		<el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

		<el-dialog title="收货地址" :visible.sync="dialogTableVisible">
		  <el-table :data="gridData">
		    <el-table-column property="date" label="日期" width="150"></el-table-column>
		    <el-table-column property="name" label="姓名" width="200"></el-table-column>
		    <el-table-column property="address" label="地址"></el-table-column>
		  </el-table>
		</el-dialog>

		<!-- Form -->
		<el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

		<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
		  <el-form :model="form">
		    <el-form-item label="活动名称" :label-width="formLabelWidth">
		      <el-input v-model="form.name" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="活动区域" :label-width="formLabelWidth">
		      <el-select v-model="form.region" placeholder="请选择活动区域">
		        <el-option label="区域一" value="shanghai"></el-option>
		        <el-option label="区域二" value="beijing"></el-option>
		      </el-select>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		  </div>
		</el-dialog>

		<p class="title"><b>嵌套的 Dialog</b></p>
		<p>如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。</p>
		<p>正常情况下，我们不建议使用嵌套的 Dialog，如果需要在页面上同时显示多个 Dialog，可以将它们平级放置。对于确实需要嵌套 Dialog 的场景，我们提供了append-to-body属性。将内层 Dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。</p>
		<template>
		  <el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>
		  <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
		    <el-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body></el-dialog>
		    <div slot="footer" class="dialog-footer">
		      <el-button @click="outerVisible = false">取 消</el-button>
		      <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
		    </div>
		  </el-dialog>
		</template>
		<p class="title"><b>居中布局</b></p>
		<p>标题和底部可水平居中</p>
		<p>center 仅影响标题和底部区域。Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。</p>
		<p>如果 visible 属性绑定的变量位于 Vuex 的 store 内，那么 .sync 不会正常工作。此时需要去除 .sync 修饰符，同时监听 Dialog 的 open 和 close 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 visible 属性绑定的变量的值。</p>
		<el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>
		<el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
		  <span>需要注意的是内容是默认不居中的</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="centerDialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
      </div>
      <div class="box">
        <h2>Tooltip 文字提示</h2>
        <p class="title"><b>基本用法</b></p>
        <p>使用content属性来决定hover时的提示信息。由placement属性决定展示效果：placement属性值为：方向-对齐位置；四个方向：top、left、right、bottom；三种对齐位置：start, end，默认为空。如placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。</p>
        <div class="top">
		    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
		      <el-button>上左</el-button>
		    </el-tooltip>
		    <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
		      <el-button>上边</el-button>
		    </el-tooltip>
		    <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
		      <el-button>上右</el-button>
		    </el-tooltip>
	   </div>
	   <div class="left">
		    <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
		      <el-button>左上</el-button>
		    </el-tooltip>
		    <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
		      <el-button>左边</el-button>
		    </el-tooltip>
		    <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
		      <el-button>左下</el-button>
		    </el-tooltip>
	    </div>
        <div class="right">
		    <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
		      <el-button>右上</el-button>
		    </el-tooltip>
		    <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
		      <el-button>右边</el-button>
		    </el-tooltip>
		    <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
		      <el-button>右下</el-button>
		    </el-tooltip>
		</div>
		<div class="bottom">
		    <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
		      <el-button>下左</el-button>
		    </el-tooltip>
		    <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
		      <el-button>下边</el-button>
		    </el-tooltip>
		    <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
		      <el-button>下右</el-button>
		    </el-tooltip>
		</div>
        
        <p class="title"><b>主题</b></p>
        <p>Tooltip 组件提供了两个不同的主题：dark和light 通过设置effect属性来改变主题，默认为dark</p>
        <el-tooltip content="Top center" placement="top">
		  <el-button>Dark</el-button>
		</el-tooltip>
		<el-tooltip content="Bottom center" placement="bottom" effect="light">
		  <el-button>Light</el-button>
		</el-tooltip>


        <p class="title"><b>更多 Content</b></p>
        <p>展示多行文本或者是设置文本内容的格式 用具名 slot 分发content，替代tooltip中的content属性。</p>
        <el-tooltip placement="top">
		  <div slot="content">多行信息<br/>第二行信息</div>
		  <el-button>Top center</el-button>
		</el-tooltip>

      </div>

      <div class="box">
        <h2>Popover 弹出框</h2>
        <p class="title"><b>基本用法</b></p>
        <p>Popover 的属性与 Tooltip 很类似，它们都是基于Vue-popper开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。</p>
        <p>设置索引ref，在按钮中，我们注册了自定义指令v-popover，指向索引ID。trigger属性用于设置何时触发 Popover ，提供三种触发方式：hover, click 和 focus。第二种用法通过 slot 指定 reference。</p>
        <el-popover ref="popover1"placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"></el-popover>
		<el-popover ref="popover2" placement="bottom" title="标题" width="200" trigger="click" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"></el-popover>
		<el-button v-popover:popover1>hover 激活</el-button>
		<el-button v-popover:popover2>click 激活</el-button>
		<el-popover placement="right" title="标题" width="200" trigger="focus" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-button slot="reference">focus 激活</el-button>
		</el-popover>

		<p class="title"><b>嵌套信息</b></p>
		<p>利用分发取代content属性</p>
		<el-popover ref="popover4" placement="right" width="400" trigger="click">
		  <el-table :data="gridData">
		    <el-table-column width="150" property="date" label="日期"></el-table-column>
		    <el-table-column width="100" property="name" label="姓名"></el-table-column>
		    <el-table-column width="300" property="address" label="地址"></el-table-column>
		  </el-table>
		</el-popover>
		<el-button v-popover:popover4>click 激活</el-button>

		<p class="title"><b>嵌套操作</b></p>
		<el-popover ref="popover5" placement="top" width="160" v-model="visible2">
		  <p>这是一段内容这是一段内容确定删除吗？</p>
		  <div style="text-align: right; margin: 0">
		    <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
		    <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
		  </div>
		</el-popover>
		<el-button v-popover:popover5>删除</el-button>
      </div>

      <div class="box">
        <h2>Card 卡片</h2>
        <p class="title"><b>基本用法</b></p>
        <p>包含标题，内容和操作。Card 组件包括header和body部分，header部分需要有显式具名 slot 分发，同时也是可选的。</p>
        <el-card class="box-card">
		  <div slot="header" class="clearfix">
		    <span>卡片名称</span>
		    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		  </div>
		  <div v-for="o in 4" :key="o" class="text item">
		    {{'列表内容 ' + o }}
		  </div>
		</el-card>

		<p class="title"><b>简单卡片</b></p>
		<p>卡片可以只有内容区域。</p>
		<el-card class="box-card">
		  <div v-for="o in 4" :key="o" class="text item">
		    {{'列表内容 ' + o }}
		  </div>
		</el-card>

		<p class="title"><b>带图片</b></p>
		<p>可配置定义更丰富的内容展示。</p>
		<el-row>
		  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
		    <el-card :body-style="{ padding: '0px' }">
		      <img src="assets/images/logo.png" class="image">
		      <div style="padding: 14px;">
		        <span>好吃的汉堡</span>
		        <div class="bottom clearfix">
		          <time class="time">{{ currentDate }}</time>
		          <el-button type="text" class="button">操作按钮</el-button>
		        </div>
		      </div>
		    </el-card>
		  </el-col>
		</el-row>

		<p class="title"><b>卡片阴影</b></p>
		<p>可对阴影的显示进行配置。通过shadow属性设置卡片阴影出现的时机：always、hover或never。</p>
		<el-row :gutter="12">
		  <el-col :span="8">
		    <el-card shadow="always">总是显示</el-card>
		  </el-col>
		  <el-col :span="8">
		    <el-card shadow="hover">鼠标悬浮时显示</el-card>
		  </el-col>
		  <el-col :span="8">
		    <el-card shadow="never">从不显示</el-card>
		  </el-col>
		</el-row>
      </div>

      <div class="box">
        <h2>Carousel 走马灯</h2>
        <p class="title"><b>基本用法</b></p>
        <p>结合使用el-carousel和el-carousel-item标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在el-carousel-item标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。通过设置trigger属性为click，可以达到点击触发的效果。</p>
        <template>
		  <div class="block">
		    <span class="demonstration">默认 Hover 指示器触发</span>
		    <el-carousel height="150px">
		      <el-carousel-item v-for="item in 4" :key="item"><h3>{{ item }}</h3></el-carousel-item>
		    </el-carousel>
		  </div>
		  <div class="block">
		    <span class="demonstration">Click 指示器触发</span>
		    <el-carousel trigger="click" height="150px">
		      <el-carousel-item v-for="item in 4" :key="item"><h3>{{ item }}</h3></el-carousel-item>
		    </el-carousel>
		  </div>
		</template>

		<p class="title"><b>指示器</b></p>
		<p>可以将指示器的显示位置设置在容器外部</p>
		<p>indicator-position属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为outside则会显示在外部；设置为none则不会显示指示器。</p>
		<template>
		  <el-carousel indicator-position="outside">
		    <el-carousel-item v-for="item in 4" :key="item">
		      <h3>{{ item }}</h3>
		    </el-carousel-item>
		  </el-carousel>
		</template>

		<p class="title"><b>切换箭头</b></p>
		<p>可以设置切换箭头的显示时机</p>
		<p>arrow属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将arrow设置为always，则会一直显示；设置为never，则会一直隐藏。</p>
		<template>
		  <el-carousel :interval="5000" arrow="always">
		    <el-carousel-item v-for="item in 4" :key="item">
		      <h3>{{ item }}</h3>
		    </el-carousel-item>
		  </el-carousel>
		</template>

		<p class="title"><b>卡片化</b></p>
		<p>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格</p>
		<p>将type属性设置为card即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，可以通过直接点击两侧的幻灯片进行切换。</p>
		<template>
		  <el-carousel :interval="4000" type="card" height="200px">
		    <el-carousel-item v-for="item in 6" :key="item">
		      <h3>{{ item }}</h3>
		    </el-carousel-item>
		  </el-carousel>
		</template>
      </div>

      <div class="box">
        <h2>Collapse 折叠面板</h2>
        <p class="title"><b>基本用法</b></p>
        <p>可同时展开多个面板，面板之间不影响</p>
        <el-collapse v-model="activeNames" @change="handleChange">
		  <el-collapse-item title="一致性 Consistency" name="1">
		    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
		    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
		  </el-collapse-item>
		  <el-collapse-item title="反馈 Feedback" name="2">
		    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
		    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
		  </el-collapse-item>
		  <el-collapse-item title="效率 Efficiency" name="3">
		    <div>简化流程：设计简洁直观的操作流程；</div>
		    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
		    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
		  </el-collapse-item>
		  <el-collapse-item title="可控 Controllability" name="4">
		    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
		    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
		  </el-collapse-item>
		</el-collapse>

		<p class="title"><b>手风琴效果</b></p>
		<p>每次只能展开一个面板 通过 accordion 属性来设置是否以手风琴模式显示。</p>
		<el-collapse v-model="activeName" accordion>
		  <el-collapse-item title="一致性 Consistency" name="1">
		    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
		    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
		  </el-collapse-item>
		  <el-collapse-item title="反馈 Feedback" name="2">
		    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
		    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
		  </el-collapse-item>
		  <el-collapse-item title="效率 Efficiency" name="3">
		    <div>简化流程：设计简洁直观的操作流程；</div>
		    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
		    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
		  </el-collapse-item>
		  <el-collapse-item title="可控 Controllability" name="4">
		    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
		    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
		  </el-collapse-item>
		</el-collapse>

		<p class="title"><b>自定义面板标题</b></p>
		<el-collapse accordion>                                                                                                                                                                                                                                              
		  <el-collapse-item>
		    <template slot="title">
		      一致性 Consistency<i class="header-icon el-icon-info"></i>
		    </template>
		    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
		    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
		  </el-collapse-item>
		  <el-collapse-item title="反馈 Feedback">
		    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
		    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
		  </el-collapse-item>
		  <el-collapse-item title="效率 Efficiency">
		    <div>简化流程：设计简洁直观的操作流程；</div>
		    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
		    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
		  </el-collapse-item>
		  <el-collapse-item title="可控 Controllability">
		    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
		    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
		  </el-collapse-item>
		</el-collapse>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Others',
  data () {
    return {
       activeName: '1',
       visible2: false,
       dialogVisible: false,
       outerVisible: false,
       innerVisible: false,
       dialogTableVisible: false,
       dialogFormVisible: false,
       formLabelWidth: '120px',
       centerDialogVisible: false,
       currentDate: new Date(),
       activeNames: ['1'],
       gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
    }
  },
  methods: {
	handleClose(done) {
	    this.$confirm('确认关闭？')
	      .then(_ => {
	        done();
	      })
	      .catch(_ => {});
	},
	handleChange(val) {
        console.log(val);
    }
  }
}
</script>
<style>
 .top {
      text-align: center;
    }

.left {
  float: left;
  width: 60px;
}

.right {
  float: right;
  width: 60px;
}

.bottom {
  clear: both;
  text-align: center;
}

.item {
  margin: 4px;
}

.left .el-tooltip__popper,
.right .el-tooltip__popper {
  padding: 8px 10px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>