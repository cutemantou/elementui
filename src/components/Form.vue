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
      <div class="box">
         <h2>Cascader 级联选择器</h2>
         <p><b>基础用法</b></p>
         <p>有两种触发子菜单的方式 只需为 Cascader 的options属性指定选项数组即可渲染出一个级联选择器。通过expand-trigger可以定义展开子级菜单的触发方式。本例还展示了change事件，它的参数为 Cascader 的绑定值：一个由各级菜单的值所组成的数组。</p>
         <div class="block">
          <span class="demonstration">默认 click 触发子菜单</span>
          <el-cascader :options="options6"  v-model="selectedOptions"  @change="handleChange"></el-cascader>
        </div>
        <div class="block" style="margin-top:20px;">
          <span class="demonstration">hover 触发子菜单</span>
          <el-cascader expand-trigger="hover" :options="options6" v-model="selectedOptions2" @change="handleChange"> </el-cascader>
        </div>
        <p><b>仅显示最后一级</b></p>
        <p>可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。属性show-all-levels定义了是否显示完整的路径，将其赋值为false则仅显示最后一级</p>
        <el-cascader :options="options6" :show-all-levels="false"></el-cascader>
        <p><b>默认值</b></p>
        <p>默认值通过数组的方式指定。</p>
        <el-cascader :options="options6" v-model="selectedOptions3"></el-cascader>
        <p><b>选择即改变</b></p>
        <p>点击或移入选项即表示选中该项，可用于选择任意一级菜单的选项。若需要允许用户选择任意一级选项，则可将change-on-select赋值为true</p>
        <el-cascader :options="options6" change-on-select></el-cascader>
        <p><b>选择即改变</b></p>
        <p>当选中某一级时，动态加载该级下的选项。本例的选项数据源在初始化时不包含城市数据。利用active-item-change事件，可以在用户点击某个省份时拉取该省份下的城市数据。此外，本例还展示了props属性的用法。</p>
        <el-cascader :options="options7" @active-item-change="handleItemChange" :props="props"></el-cascader>
        <p><b>可搜索</b></p>
        <p>可以快捷地搜索选项并选择。将filterable赋值为true即可打开搜索功能。</p>
        <div class="block" style="margin-bottom:30px;">
          <span class="demonstration">只可选择最后一级菜单的选项</span>
          <el-cascader placeholder="试试搜索：指南"  :options="options6" filterable></el-cascader>
        </div>
        <div class="block" style="margin-bottom:30px;">
          <span class="demonstration">可选择任意一级菜单的选项</span>
          <el-cascader placeholder="试试搜索：指南" :options="options6" filterable change-on-select ></el-cascader>
        </div>
      </div>
      <div class="box">
         <h2>Switch 开关</h2>
         <p><b>基础用法</b></p>
         <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。</p>
         <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
         <p><b>文字描述</b></p>
         <el-switch v-model="value3" active-text="按月付费" inactive-text="按年付费"></el-switch>
         <el-switch style="display: block"  v-model="value4" active-color="#13ce66" inactive-color="#ff4949" active-text="按月付费" inactive-text="按年付费"></el-switch>
         <p><b>扩展的 value 类型</b></p>
         <el-tooltip :content="'Switch value: ' + value5" placement="top">
          <el-switch v-model="value8" active-color="#13ce66" inactive-color="#ff4949" active-value="100" inactive-value="0"></el-switch>
         </el-tooltip>
         <p><b>禁用状态</b></p>
         <el-switch v-model="value12" disabled></el-switch>
         <el-switch v-model="value13" disabled></el-switch>
      </div>
      <div class="box">
         <h2>Slider 滑块</h2>
         <p><b>基础用法</b></p>
         <template>
          <div class="block" style="margin-bottom:10px;">
            <span class="demonstration">默认</span>
            <el-slider v-model="value21"></el-slider>
          </div>
          <div class="block" style="margin-bottom:10px;">
            <span class="demonstration">自定义初始值</span>
            <el-slider v-model="value22"></el-slider>
          </div>
          <div class="block" style="margin-bottom:10px;">
            <span class="demonstration">隐藏 Tooltip</span>
            <el-slider v-model="value23" :show-tooltip="false"></el-slider>
          </div>
          <div class="block" style="margin-bottom:10px;">
            <span class="demonstration">格式化 Tooltip</span>
            <el-slider v-model="value24" :format-tooltip="formatTooltip"></el-slider>
          </div>
          <div class="block" style="margin-bottom:10px;">
            <span class="demonstration">禁用</span>
            <el-slider v-model="value25" disabled></el-slider>
          </div>
        </template>
        <p><b>离散值</b></p>
        <p>选项可以是离散的 改变step的值可以改变步长，通过设置show-step属性可以显示间断点</p>
        <template>
          <div class="block" style="margin-bottom:10px;">
            <span class="demonstration">不显示间断点</span>
            <el-slider v-model="value26" :step="10"></el-slider>
          </div>
          <div class="block" style="margin-bottom:10px;">
            <span class="demonstration">显示间断点</span>
            <el-slider v-model="value27" :step="10" show-stops></el-slider>
          </div>
        </template>
        <p><b>带有输入框</b></p>
        <p>通过输入框设置精确数值 设置show-input属性会在右侧显示一个输入框</p>
        <template>
          <div class="block">
            <el-slider v-model="value28"  show-input></el-slider>
          </div>
        </template>
        <p><b>范围选择</b></p>
        <p>支持选择某一数值范围 设置range即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值</p>
        <template>
          <div class="block">
            <el-slider v-model="value29" range show-stops :max="10"> </el-slider>
          </div>
        </template>
        <p><b>竖向模式</b></p>
        <p>设置vertical可使 Slider 变成竖向模式，此时必须设置高度height属性</p>
        <template>
          <div class="block">
            <el-slider v-model="value30" vertical height="200px"></el-slider>
          </div>
        </template>
      </div>
      <div class="box">
         <h2>TimePicker 时间选择器</h2>
         <p><b>用于选择或输入日期</b></p>
         <p>固定时间点 提供几个固定的时间点供用户选择 使用 el-time-select 标签，分别通过star、end和step指定可选的起始时间、结束时间和步长</p>
         <el-time-select v-model="value31":picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }"
          placeholder="选择时间">
        </el-time-select>
        <p><b>任意时间点</b></p>
        <p>可以选择任意时间 使用 el-time-picker 标签，通过selectableRange限制可选时间范围。提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开arrow-control属性则通过界面上的箭头进行选择</p>
        <template>
          <el-time-picker v-model="value32" :picker-options="{ selectableRange: '18:30:00 - 20:30:00'}" placeholder="任意时间点"></el-time-picker>
          <el-time-picker arrow-control  v-model="value33" :picker-options="{selectableRange: '18:30:00 - 20:30:00'}" placeholder="任意时间点"></el-time-picker>
        </template>
        <p><b>固定时间范围</b></p>
        <p>若先选择开始时间，则结束时间内备选项的状态会随之改变</p>
        <template>
          <el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }">
          </el-time-select>
          <el-time-select placeholder="结束时间" v-model="endTime":picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
              minTime: startTime
            }">
          </el-time-select>
        </template>
        <p><b>任意时间范围</b></p>
        <p>可选择任意的时间范围</p>
        <p>添加is-range属性即可选择时间范围，同样支持arrow-control属性。</p>
        <template>
          <el-time-picker is-range v-model="value34"  range-separator="至" start-placeholder="开始时间"  end-placeholder="结束时间" placeholder="选择时间范围"></el-time-picker>
          <el-time-picker is-range arrow-control v-model="value35" range-separator="至"  start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围"></el-time-picker>
        </template>
      </div>
      <div class="box">
         <h2>DatePicker 日期选择器</h2>
         <p><b>选择日</b></p>
         <p>以「日」为基本单位，基础的日期选择控件 基本单位由type属性指定。快捷选项需配置picker-options对象中的shortcuts，禁用日期通过 disabledDate 设置，传入函数</p>
         <template>
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker v-model="value41" type="date"  placeholder="选择日期"></el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker v-model="value42" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1"></el-date-picker>
          </div>
        </template>
        <p><b>其他日期单位</b></p>
        <p>通过扩展基础的日期选择，可以选择周、月、年</p>
        <div class="block" style="margin-bottom:10px;">
          <span class="demonstration">周</span>
          <el-date-picker v-model="value43" type="week" format="yyyy 第 WW 周" placeholder="选择周"></el-date-picker>
        </div>
        <div class="block" style="margin-bottom:10px;">
          <span class="demonstration">月</span>
          <el-date-picker v-model="value44" type="month" placeholder="选择月"> </el-date-picker>
        </div>
        <div class="block" style="margin-bottom:20px;">
          <span class="demonstration">年</span>
          <el-date-picker v-model="value45" align="right" type="year" placeholder="选择年"></el-date-picker>
        </div>
        <p><b>选择日期范围</b></p>
        <p>可在一个选择器中便捷地选择一个时间范围 在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用unlink-panels属性解除联动。</p>
        <template>
          <div class="block" style="margin-bottom:20px;">
            <span class="demonstration">默认</span>
            <el-date-picker v-model="value46" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
          </div> 
          <div class="block" style="margin-bottom:20px;">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker v-model="value47"  type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
            </el-date-picker>
          </div>
        </template>
      </div>
      <div class="box">
         <h2>DateTimePicker 日期时间选择器</h2>
         <p><b>日期和时间点</b></p>
         <p>通过设置type属性为datetime，即可在同一个选择器里同时进行日期和时间的选择。快捷选项的使用方法与 Date Picker 相同。</p>
         <template>
           <div class="block" style="margin-bottom:20px;">
            <span class="demonstration">默认</span>
            <el-date-picker v-model="value51" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </div>
          <div class="block" style="margin-bottom:20px;">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker v-model="value52" type="datetime" placeholder="选择日期时间" align="right" :picker-options="pickerOptions1"></el-date-picker>
          </div>
           <div class="block" style="margin-bottom:20px;">
            <span class="demonstration">设置默认时间</span>
            <el-date-picker v-model="value53" type="datetime" placeholder="选择日期时间" default-time="12:00:00"></el-date-picker>
          </div>
        </template>
        <p><b>日期和时间范围</b></p>
        <p>设置type为datetimerange即可选择日期和时间范围</p>
        <template>
          <div class="block" style="margin-bottom:20px;">
            <span class="demonstration">默认</span>
            <el-date-picker v-model="value54" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
          </div>
          <div class="block" style="margin-bottom:20px;">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker v-model="value55" type="datetimerange" :picker-options="pickerOptions2" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="right"></el-date-picker>
          </div>
        </template>
        <p><b>默认的起始与结束时刻</b></p>
        <p>使用datetimerange进行范围选择时，在日期选择面板中选定起始与结束的日期，默认会使用该日期的00:00:00作为起始与结束的时刻；通过选项default-time可以控制选中起始与结束日期时所使用的具体时刻。default-time接受一个数组，数组每项值为字符串，形如12:00:00，其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻。</p>
        <template>
          <div class="block" style="margin-bottom:20px;">
            <span class="demonstration">起始日期时刻为 12:00:00</span>
            <el-date-picker v-model="value6" type="datetimerange" start-placeholder="开始日期"  end-placeholder="结束日期" :default-time="['12:00:00']"></el-date-picker>
          </div>
          <div class="block" style="margin-bottom:20px;">
            <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
            <el-date-picker v-model="value7"  type="datetimerange"align="right" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['12:00:00', '08:00:00']"></el-date-picker>
          </div>
        </template>
      </div>
      <div class="box">
         <h2>Upload 上传</h2>
         <p><b>点击上传</b></p>
         <p>通过 slot 你可以传入自定义的上传按钮类型和文字提示。可通过设置limit和on-exceed来限制上传文件的个数和定义超出限制时的行为。可通过设置before-remove来阻止文件移除操作。</p>
         <el-upload class="upload-demo"  action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove"
          multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
         </el-upload>
         <p><b>用户头像上传</b></p>
         <p>使用 before-upload 限制用户上传的图片格式和大小。</p>
         <el-upload class="avatar-uploader"action="https://jsonplaceholder.typicode.com/posts/"  :show-file-list="false" :on-success="handleAvatarSuccess":before-upload="beforeAvatarUpload"> <img v-if="imageUrl" :src="imageUrl" class="avatar"> <i v-else class="el-icon-plus avatar-uploader-icon"></i>
         </el-upload>
         <p><b>照片墙</b></p>
         <p>使用 list-type 属性来设置文件列表的样式。</p>
         <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
         </el-upload>
         <el-dialog :visible.sync="dialogVisible"><img width="100%" :src="dialogImageUrl" alt=""></el-dialog>
         <p><b>图片列表缩略图</b></p>
         <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
         </el-upload>
         <p><b>上传文件列表控制</b></p>
         <p>通过 on-change 钩子函数来对列表进行控制</p>
         <el-upload class="upload-demo"  action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList3">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
         </el-upload>
         <p><b>拖拽上传</b></p>
         <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/"  multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
         </el-upload>
         <p><b>手动上传</b></p>
         <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
      <div class="box">
         <h2>Rate 评分</h2>
         <p><b>基础用法</b></p>
         <p>评分被分为三个等级，可以利用颜色对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用过colors属性设置，而它们对应的两个阈值则通过 low-threshold 和 high-threshold 设定。</p>
         <div class="block" style="margin-bottom:20px;">
          <span class="demonstration">默认不区分颜色</span>
          <el-rate v-model="value61"></el-rate>
         </div>
         <div class="block" style="margin-bottom:20px;">
          <span class="demonstration">区分颜色</span>
          <el-rate v-model="value62" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"> </el-rate>
        </div>
        <p><b>辅助文字</b></p>
        <p>用辅助文字直接地表达对应分数</p>
        <p>为组件设置 show-text 属性会在右侧显示辅助文字。通过设置 texts 可以为每一个分值指定对应的辅助文字。texts 为一个数组，长度应等于最大值 max。</p>
        <el-rate v-model="value63" show-text></el-rate>
        <p><b>其它 icon</b></p>
        <p>当有多层评价时，可以用不同类型的 icon 区分评分层级 设置icon-classes属性可以自定义对应 3 个不同分段的图标。本例还使用void-icon-class指定了未选中时的图标类名。</p>
        <el-rate v-model="value64" :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']" void-icon-class="icon-rate-face-off":colors="['#99A9BF', '#F7BA2A', '#FF9900']"> </el-rate>
        <p><b>只读</b></p>
        <p>只读的评分用来展示分数，允许出现半星</p>
        <p>为组件设置 disabled 属性表示组件为只读，支持小数分值。此时若设置 show-score，则会在右侧显示目前的分值。可以提供 score-template 作为显示模板，模板为一个包含了 {value} 的字符串，{value} 会被解析为分值。</p>
        <el-rate v-model="value65" disabled show-score text-color="#ff9900" score-template="{value}"> </el-rate>
      </div>
      <div class="box">
         <h2>ColorPicker 颜色选择器</h2>
         <p><b>基础用法</b></p>
         <p>使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。</p>
         <div class="block" style="margin-bottom:20px;">
          <span class="demonstration">有默认值</span>
          <el-color-picker v-model="color1"></el-color-picker>
        </div>
        <div class="block" style="margin-bottom:20px;">
          <span class="demonstration">无默认值</span>
          <el-color-picker v-model="color2"></el-color-picker>
        </div>
        <p><b>选择透明度</b></p>
        <p>ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过show-alpha属性即可控制是否支持透明度的选择。</p>
        <el-color-picker v-model="color3" show-alpha></el-color-picker>
        <p><b>预定义颜色</b></p>
        <el-color-picker  v-model="color5"  show-alpha :predefine="predefineColors"></el-color-picker>
        <p><b>不同尺寸</b></p>
        <el-color-picker v-model="color4"></el-color-picker>
        <el-color-picker v-model="color4" size="medium"></el-color-picker>
        <el-color-picker v-model="color4" size="small"></el-color-picker>
        <el-color-picker v-model="color4" size="mini"></el-color-picker>
      </div>
      <div class="box">
         <h2>Transfer 穿梭框</h2>
         <p><b>基础用法</b></p>
         <p>Transfer 的数据通过 data 属性传入。数据需要是一个对象数组，每个对象有以下属性：key 为数据的唯一性标识，label 为显示文本，disabled 表示该项数据是否禁止转移。目标列表中的数据项会同步到绑定至 v-model 的变量，值为数据项的 key 所组成的数组。当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 v-model 绑定的变量赋予一个初始值。</p>
         <template>
            <el-transfer v-model="value71" :data="data"></el-transfer>
        </template>
        <p><b>可搜索</b></p>
        <p>在数据很多的情况下，可以对数据进行搜索和过滤。</p>
        <p>设置 filterable 为 true 即可开启搜索模式。默认情况下，若数据项的 label 属性包含搜索关键字，则会在搜索结果中显示。你也可以使用 filter-method 定义自己的搜索逻辑。filter-method 接收一个方法，当搜索关键字变化时，会将当前的关键字和每个数据项传给该方法。若方法返回 true，则会在搜索结果中显示对应的数据项。</p>
        <template>
          <el-transfer filterable :filter-method="filterMethod" filter-placeholder="请输入城市拼音" v-model="value72" :data="data2"></el-transfer>
        </template>
        <p><b>可自定义</b></p>
        <p>可以对列表标题文案、按钮文案、数据项的渲染函数、列表底部的勾选状态文案、列表底部的内容区等进行自定义。</p>
        <p>可以使用 titles、button-texts、render-content 和 format 属性分别对列表标题文案、按钮文案、数据项的渲染函数和列表顶部的勾选状态文案进行自定义。对于列表底部的内容区，提供了两个具名 slot：left-footer 和 right-footer。此外，如果希望某些数据项在初始化时就被勾选，可以使用 left-default-checked 和 right-default-checked 属性。最后，本例还展示了 change 事件的用法。注意：由于 jsfiddle 不支持 JSX 语法，所以本例在 jsfiddle 中无法运行。但是在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。</p>
        <template>
          <el-transfer v-model="value3" filterable :left-default-checked="[2, 3]" :right-default-checked="[1]" :render-content="renderFunc" :titles="['Source', 'Target']" :button-texts="['到左边', '到右边']"
            :format="{ noChecked: '${total}',hasChecked: '${checked}/${total}'}"  @change="handleChange" :data="data">
            <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
            <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
          </el-transfer>
        </template>
        <p><b>数据项属性别名</b></p>
        <p>默认情况下，Transfer 仅能识别数据项中的 key、label 和 disabled 字段。如果你的数据的字段名不同，可以使用 props 属性为它们设置别名</p>
        <p>本例中的数据源没有 key 和 label 字段，在功能上与它们相同的字段名为 value 和 desc。因此可以使用props 属性为 key 和 label 设置别名。</p>
        <template>
          <el-transfer v-model="value74" :props="{ key: 'value',  label: 'desc'}" :data="data3"></el-transfer>
        </template>
      </div>
      <div class="box">
         <h2>Form表单</h2>
         <p><b>典型表单</b></p>
         <p>包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker</p>
         <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-radio-group v-model="form.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
          <p><b>行内表单</b></p>
          <p>当垂直方向空间受限且表单较简单时，可以在一行内放置表单。设置 inline 属性可以让表单域变为行内的表单域</p>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
          </el-form>
          <p><b>对齐方式</b></p>
          <p>通过设置 label-position 属性可以改变表单域标签的位置，可选值为 top、left，当设为 top 时标签会置于表单域的顶部</p>
          <el-radio-group v-model="labelPosition" size="small">
            <el-radio-button label="left">左对齐</el-radio-button>
            <el-radio-button label="right">右对齐</el-radio-button>
            <el-radio-button label="top">顶部对齐</el-radio-button>
          </el-radio-group>
          <div style="margin: 20px;"></div>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="名称">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
          </el-form>
          <p><b>表单验证</b></p>
          <p>在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。</p>
          <p>Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并 Form-Item 的 prop 属性设置为需校验的字段名即可。校验规则参见 async-validator</p>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
          <p><b>自定义校验规则</b></p>
          <p>本例还使用status-icon属性为输入框添加了表示校验结果的反馈图标。</p>
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input v-model.number="ruleForm2.age"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form>
          <p><b>动态增减表单项</b></p>
          <p>除了在 Form 组件上一次性传递所有的验证规则外还可以在单个的表单域上传递属性的验证规则</p>
          <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
            <el-form-item prop="email" label="邮箱"
              :rules="[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
              ]">
              <el-input v-model="dynamicValidateForm.email"></el-input>
            </el-form-item>
            <el-form-item
              v-for="(domain, index) in dynamicValidateForm.domains"
              :label="'域名' + index"
              :key="domain.key"
              :prop="'domains.' + index + '.value'"
              :rules="{
                required: true, message: '域名不能为空', trigger: 'blur'
              }">
              <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
              <el-button @click="addDomain">新增域名</el-button>
              <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
            </el-form-item>
          </el-form>
          <p><b>数字类型验证</b></p>
          <p>数字类型的验证需要在 v-model 处加上 .number 的修饰符，这是 Vue 自身提供的用于将绑定值转化为 number 类型的修饰符。</p>
          <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="年龄" prop="age"
              :rules="[
                { required: true, message: '年龄不能为空'},
                { type: 'number', message: '年龄必须为数字值'}
              ]" >
              <el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
              <el-button @click="resetForm('numberValidateForm')">重置</el-button>
            </el-form-item>
          </el-form>
          <p><b>表单内组件尺寸控制</b></p>
          <p>通过设置 Form 上的 size 属性可以使该表单内所有可调节大小的组件继承该尺寸。Form-Item 也具有该属性。</p>
          <p>如果希望某个表单项或某个表单组件的尺寸不同于 Form 上的size属性，直接为这个表单项或表单组件设置自己的size即可。</p>
          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="活动名称"><el-input v-model="sizeForm.name"></el-input></el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="活动性质">
              <el-checkbox-group v-model="sizeForm.type">
                <el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>
                <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
                <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-radio-group v-model="sizeForm.resource" size="medium">
                <el-radio border label="线上品牌商赞助"></el-radio>
                <el-radio border label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item size="large">
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
      </div>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  name: 'Form',
  data () {
    const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
    };

    const generateData2 = _ => {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
    };
    const generateData3 = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            value: i,
            desc: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
    };
    var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
    };
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
    };
    var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
    };
    return {
      sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
      },
      numberValidateForm: {
          age: ''
      },
      dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
      },
      ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
      },
      rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
      },
      ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
      },
      rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
      },
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      formInline: {
          user: '',
          region: ''
      },
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
      },
      data3: generateData3(),
      value74: [],
      value73: [1],
      renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
      },
      data2: generateData2(),
      value72: [],
      filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
      },
      data: generateData(),
      value71: [1, 4],
      color1: '#409EFF',
      color2: null,
      color3: 'rgba(19, 206, 102, 0.8)',
      color4: '#409EFF',
      color5: 'rgba(255, 69, 0, 0.68)',
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ],
      imageUrl: '',
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      fileList3: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }],
      dialogImageUrl: '',
      dialogVisible: false,
      value61: null,
      value62: null,
      value63: null,
      value64: null,
      value65: 3.7,
      startTime: '',
      endTime: '',
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
      value8: '100',
      value6: '',
      value2: '',
      value3: '',
      value4: '',
      value5: [],
      value11: [],
      value12: true,
      value13: false,
      options4: [],
	    value9: [],
      value21: 0,
      value22: 50,
      value23: 36,
      value24: 48,
      value25: 42,
      value26: 0,
      value27: 0,
      value28: 0,
      value29: [4, 8],
      value30: 0,
      value31: '',
      value32: new Date(2016, 9, 10, 18, 40),
      value33: new Date(2016, 9, 10, 18, 40),
      value34: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value35: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
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
       value10: [],
       options6: [{
          value: 'zhinan',
          label: '指南',
          disabled: true,
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        selectedOptions: [],
        selectedOptions2: [],
        selectedOptions3: ['zujian', 'data', 'tag'],
        options7: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        },
        value1: true,
        value2: true,
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value41: '',
        value42: '',
        value43: '',
        value44: '',
        value45: '',
        value51: '',
        value52: '',
        value53: '',
        value54: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value55: '',
        value56: '',
        value57: '',
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value46: '',
        value47: ''
    }

  },
  methods: {
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      onSubmit() {
        console.log('submit!');
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handlePreview(file) {
        console.log(file);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      formatTooltip(val) {
        return val / 100;
      },
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
      },
     handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options7[0].cities.length) {
            this.options7[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options7[1].cities.length) {
            this.options7[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
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
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>