<template>
  <div class="form">
      <div class="box">
       <h2>Radio 单选框</h2>
       <p><b>基础用法</b></p>
       <p>要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。</p>
       <template>
          <el-radio v-model="radio" label="1">备选项</el-radio>
          <el-radio v-model="radio" label="2">备选项</el-radio>
       </template>
       <p><b>禁用状态</b></p>
       <template>
        <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
        <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
       </template>
       <p><b>单选框组</b></p>
       <template>
          <el-radio-group v-model="radio2">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
          </el-radio-group>
       </template>
       <p><b>按钮样式</b></p>
       <template>
          <div>
            <el-radio-group v-model="radio3">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio4" size="medium">
              <el-radio-button label="上海" ></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio5" size="small">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京" disabled ></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio6" disabled size="mini">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
        </template>
        <p><b>带有边框</b></p>
        <template>
          <div>
            <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
            <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
          </div>
          <div style="margin-top: 20px">
            <el-radio v-model="radio8" label="1" border size="medium">备选项1</el-radio>
            <el-radio v-model="radio8" label="2" border size="medium">备选项2</el-radio>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio9" size="small">
              <el-radio label="1" border>备选项1</el-radio>
              <el-radio label="2" border disabled>备选项2</el-radio>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio10" size="mini" disabled>
              <el-radio label="1" border>备选项1</el-radio>
              <el-radio label="2" border>备选项2</el-radio>
            </el-radio-group>
          </div>
        </template>
      </div>
      <div class="box">
         <h2>Checkbox 多选框</h2>
         <p><b>基础用法</b></p>
         <template>
          <!-- `checked` 为 true 或 false -->
          <el-checkbox v-model="checked">备选项</el-checkbox>
         </template>
         <p><b>禁用状态</b></p>
         <template>
            <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
            <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
         </template>
         <p><b>多选框组</b></p>
         <p>checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可。 el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>
         <template>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="复选框 A"></el-checkbox>
              <el-checkbox label="复选框 B"></el-checkbox>
              <el-checkbox label="复选框 C"></el-checkbox>
              <el-checkbox label="禁用" disabled></el-checkbox>
              <el-checkbox label="选中且禁用" disabled></el-checkbox>
            </el-checkbox-group>
         </template>
         <p><b>indeterminate 状态</b></p>
         <p>indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果</p>
         <template>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
          </template>
          <p><b>可选项目数量的限制</b></p>
          <p>使用 min 和 max 属性能够限制可以被勾选的项目的数量。</p>
          <template>
            <el-checkbox-group  v-model="checkedCities1" :min="1":max="2">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
          </template>
          <p><b>按钮样式</b></p>
          <p>按钮样式的多选组合。只需要把el-checkbox元素替换为el-checkbox-button元素即可。此外，Element 还提供了size属性。</p>
          <template>
            <div>
              <el-checkbox-group v-model="checkboxGroup1">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
              </el-checkbox-group>
            </div>
            <div style="margin-top: 20px">
              <el-checkbox-group v-model="checkboxGroup2" size="medium">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
              </el-checkbox-group>
            </div>
            <div style="margin-top: 20px">
              <el-checkbox-group v-model="checkboxGroup3" size="small">
                <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
              </el-checkbox-group>
            </div>
            <div style="margin-top: 20px">
              <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
              </el-checkbox-group>
            </div>
          </template>
          <p><b>带有边框</b></p>
          <template>
            <div>
              <el-checkbox v-model="checked3" label="备选项1" border></el-checkbox>
              <el-checkbox v-model="checked4" label="备选项2" border></el-checkbox>
            </div>
            <div style="margin-top: 20px">
              <el-checkbox v-model="checked5" label="备选项1" border size="medium"></el-checkbox>
              <el-checkbox v-model="checked6" label="备选项2" border size="medium"></el-checkbox>
            </div>
            <div style="margin-top: 20px">
              <el-checkbox-group v-model="checkboxGroup5" size="small">
                <el-checkbox label="备选项1" border></el-checkbox>
                <el-checkbox label="备选项2" border disabled></el-checkbox>
              </el-checkbox-group>
            </div>
            <div style="margin-top: 20px">
              <el-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
                <el-checkbox label="备选项1" border></el-checkbox>
                <el-checkbox label="备选项2" border></el-checkbox>
              </el-checkbox-group>
            </div>
          </template>
      </div>
      <div class="box">
         <h2>Input 输入框</h2>
         <p><b>基础用法</b></p>
         <el-input v-model="input" placeholder="请输入内容"></el-input>
         <p><b>禁用状态</b></p>
         <el-input placeholder="请输入内容" v-model="input1" :disabled="true"></el-input>
         <p><b>可清空</b></p>
         <p>使用clearable属性即可得到一个可清空的输入框</p>
         <el-input placeholder="请输入内容" v-model="input10" clearable></el-input>
         <p><b>带 icon 的输入框</b></p>
         <p>带有图标标记输入类型可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。</p>
         <div class="demo-input-suffix">
          属性方式：
          <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input2" style="margin-bottom:10px;"></el-input>
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21" style="margin-bottom:10px;"></el-input>
        </div>
        <div class="demo-input-suffix">
          slot 方式：
          <el-input placeholder="请选择日期" v-model="input22" style="margin-bottom:10px;"><i slot="suffix" class="el-input__icon el-icon-date"></i></el-input>
          <el-input placeholder="请输入内容" v-model="input23" style="margin-bottom:10px;"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
        </div>
        <p><b>文本域</b></p>
        <p>用于输入多行文本信息，通过将 type 属性的值指定为 textarea。文本域高度可通过 rows 属性控制</p>
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
        <p><b>可自适应文本高度的文本域</b></p>
        <p>通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。</p>
        <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea2"></el-input>
        <div style="margin: 20px 0;"></div>
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea3"></el-input>
        <p><b>复合型输入框</b></p>
        <div>
          <el-input placeholder="请输入内容" v-model="input3">
            <template slot="prepend">Http://</template>
          </el-input>
        </div>
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="input4">
            <template slot="append">.com</template>
          </el-input>
        </div>
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <p><b>尺寸</b></p>
        <div class="demo-input-size">
          <el-input placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input6" style="margin-bottom:10px;"></el-input>
          <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input7" style="margin-bottom:10px;"></el-input>
          <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input8" style="margin-bottom:10px;"></el-input>
          <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input9" style="margin-bottom:10px;"></el-input>
        </div>
        <p><b>带输入建议</b></p>
        <p>autocomplete 是一个可带输入建议的输入框组件，fetch-suggestions 是一个返回输入建议的方法属性，如 querySearch(queryString, cb)，在该方法中你可以在你的输入建议数据准备好时通过 cb(data) 返回到 autocomplete 组件中。</p>
        <el-row class="demo-autocomplete">
          <el-col :span="12">
            <div class="sub-title">激活即列出输入建议</div>
            <el-autocomplete class="inline-input" v-model="state1" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
          </el-col>
          <el-col :span="12">
            <div class="sub-title">输入后匹配输入建议</div>
            <el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
          </el-col>
        </el-row>
        <p><b>自定义模板</b></p>
        <p>使用scoped slot自定义输入建议的模板。该 scope 的参数为item，表示当前输入建议对象</p>
        <el-autocomplete popper-class="my-autocomplete" v-model="state3" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect">
          <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"></i>
          <template slot-scope="props">
            <div class="name">{{ props.item.value }}</div>
            <span class="addr">{{ props.item.address }}</span>
          </template>
        </el-autocomplete>
        <p><b>远程搜索</b></p>
        <p>从服务端搜索数据</p>
        <el-autocomplete v-model="state4"  :fetch-suggestions="querySearchAsync"  placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
      </div>
      <div class="box">
         <h2>InputNumber 计数器</h2>
         <p><b>基础用法</b></p>
         <template>
             <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
         </template>
         <p><b>禁用状态</b></p>
         <template>
			  <el-input-number v-model="num2" :disabled="true"></el-input-number>
		 </template>
		 <p><b>步数</b></p>
		 <template>
		  <el-input-number v-model="num3" :step="2"></el-input-number>
		 </template>
		 <p><b>尺寸</b></p>
		 <p>额外提供了 medium、small、mini 三种尺寸的数字输入框</p>
		 <template>
		  <el-input-number v-model="num4"></el-input-number>
		  <el-input-number size="medium" v-model="num5"></el-input-number>
		  <el-input-number size="small" v-model="num6"></el-input-number>
		  <el-input-number size="mini" v-model="num7"></el-input-number>
		 </template>
		 <p><b>按钮位置</b></p>
		 <template>
		  <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
		 </template>
      </div>
      <div class="box">
         <h2>Select 选择器</h2>
         <p><b>基础用法</b></p>
         <template>
		  <el-select v-model="value" placeholder="请选择">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select>
		</template>
		<p><b>基础用法</b></p>
		<template>
		  <el-select v-model="value3" disabled placeholder="请选择">
		    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
		    </el-option>
		  </el-select>
		</template>
		<p><b>可清空单选</b></p>
		<template>
		  <el-select v-model="value4" clearable placeholder="请选择">
		    <el-option v-for="item in options" :key="item.value"  :label="item.label" :value="item.value">
		    </el-option>
		  </el-select>
		</template>
		<p><b>基础多选</b></p>
		<p>为el-select设置multiple属性即可启用多选，此时v-model的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置collapse-tags属性将它们合并为一段文字。</p>
		<template>
		  <el-select v-model="value5" multiple placeholder="请选择">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select>

		  <el-select v-model="value11"  multiple collapse-tags style="margin-left: 20px;" placeholder="请选择">
		    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
		  </el-select>
		</template>
		<p><b>自定义模板</b></p>
		<template>
		  <el-select v-model="value6" placeholder="请选择">
		    <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
		      <span style="float: left">{{ item.label }}</span>
		      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
		    </el-option>
		  </el-select>
		</template>
        <p><b>分组</b></p>
        <p>使用el-option-group对备选项进行分组，它的label属性为分组名</p>
        <template>
		  <el-select v-model="value7" placeholder="请选择">
		    <el-option-group v-for="group in options3" :key="group.label" :label="group.label">
		      <el-option  v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
		    </el-option-group>
		  </el-select>
		</template>
        <p><b>远程搜索</b></p>
        <p>从服务器搜索数据，输入关键字进行查找</p>
        <p>为了启用远程搜索，需要将filterable和remote设置为true，同时传入一个remote-method。remote-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果el-option是通过v-for指令渲染出来的，此时需要为el-option添加key属性，且其值需具有唯一性，比如此例中的item.value。</p>
        <template>
		  <el-select v-model="value9"  multiple  filterable  remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
		    <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value"> </el-option>
		  </el-select>
		</template>
		<p><b>创建条目</b></p>
		<p>可以创建并选中选项中不存在的条目</p>
		<p>使用allow-create属性即可通过在输入框中输入文字来创建新的条目。注意此时filterable必须为真。本例还使用了default-first-option属性，在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。</p>
		<template>
		  <el-select v-model="value10" multiple filterable allow-create  default-first-option placeholder="请选择文章标签">
		    <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
		</template>
      </div>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  name: 'Form',
  data () {
    return {
      radio: '1',
      radio1: '选中且禁用',
      radio2: 3,
      radio3: '上海',
      radio4: '上海',
      radio5: '上海',
      radio6: '上海',
      radio7: '1',
      radio8: '1',
      radio9: '1',
      radio10: '1',
      checked: true,
      checked1: false,
      checked2: true,
      checkList: ['选中且禁用','复选框 A'],
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
      checkedCities1: ['上海', '北京'],
      cities: cityOptions,
      checkboxGroup1: ['上海'],
      checkboxGroup2: ['上海'],
      checkboxGroup3: ['上海'],
      checkboxGroup4: ['上海'],
      checked3: true,
      checked4: false,
      checked5: false,
      checked6: true,
      checkboxGroup5: [],
      checkboxGroup6: [],
      input: '',
      input1: '',
      input10: '',
      input2: '',
      input21: '',
      input22: '',
      input23: '',
      textarea: '',
      textarea2: '',
      textarea3: '',
      input3: '',
      input4: '',
      input5: '',
      select: '',
      input6: '',
      input7: '',
      input8: '',
      input9: '',
      restaurants: [],
      state1: '',
      state2: '',
      num1: 1,
      num2: 1,
      num3: 5,
      num4: 1,
      num5: 1,
      num6: 1,
      num7: 1,
      num8: 1,
      state3: '',
      state4: '',
      timeout:  null,
      value: '',
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
      options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
      value7: '',
      value6: '',
      value2: '',
      value3: '',
      value4: '',
      value5: [],
      value11: [],
      options4: [],
	  value9: [],
	  list: [],
	  loading: false,
	  states: ["Alabama", "Alaska", "Arizona",
	    "Arkansas", "California", "Colorado",
	    "Connecticut", "Delaware", "Florida",
	    "Georgia", "Hawaii", "Idaho", "Illinois",
	    "Indiana", "Iowa", "Kansas", "Kentucky",
	    "Louisiana", "Maine", "Maryland",
	    "Massachusetts", "Michigan", "Minnesota",
	    "Mississippi", "Missouri", "Montana",
	    "Nebraska", "Nevada", "New Hampshire",
	    "New Jersey", "New Mexico", "New York",
	    "North Carolina", "North Dakota", "Ohio",
	    "Oklahoma", "Oregon", "Pennsylvania",
	    "Rhode Island", "South Carolina",
	    "South Dakota", "Tennessee", "Texas",
	    "Utah", "Vermont", "Virginia",
	    "Washington", "West Virginia", "Wisconsin",
	    "Wyoming"],
	  options5: [{
          value: 'HTML',
          label: 'HTML'
       }, {
          value: 'CSS',
          label: 'CSS'
       }, {
          value: 'JavaScript',
          label: 'JavaScript'
       }],
       value10: []
    }
  },
  methods: {
      handleChange(value) {
        console.log(value);
      },
      handleChange(value) {
        console.log(value);
      },
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      }
  },
  mounted() {
      this.restaurants = this.loadAll();
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
  }
}
</script>