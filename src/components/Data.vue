<template>
  <div class="data">
       <div class="box">
        <h2>Table 表格</h2>
        <p><b>基础表格</b></p>
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column  prop="date" label="日期" width="180"></el-table-column>
            <el-table-column  prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column  prop="address" label="地址"></el-table-column>
          </el-table>
        </template>
        <p><b>带斑马纹表格</b></p>
        <p>stripe属性可以创建带斑马纹的表格。它接受一个Boolean，默认为false，设置为true即为启用。</p>
        <template>
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </template>
        <p><b>带边框的表格</b></p>
        <p>默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用border属性，它接受一个Boolean，设置为true即可启用。</p>
        <template>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column  prop="date" label="日期" width="180"></el-table-column>
            <el-table-column  prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column  prop="address" label="地址"></el-table-column>
          </el-table>
        </template>
        <p><b>带状态表格</b></p>
        <p>可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。可以通过指定 Table 组件的 row-class-name 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。</p>
        <template>
          <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </template>
        <p><b>固定表头</b></p>
        <p>纵向内容过多时，可选择固定表头。</p>
        <template>
          <el-table :data="tableData" height="250" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </template>
        <p><b>固定列</b></p>
        <p>横向内容过多时，可选择固定列。</p>
        <template>
          <el-table :data="tableData3" border style="width:800px">
            <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="province" label="省份" width="120"></el-table-column>
            <el-table-column prop="city" label="市区" width="120"></el-table-column>
            <el-table-column prop="address" label="地址" width="300"></el-table-column>
            <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <p><b>流体高度</b></p>
        <p>当数据量动态变化时，可以为 Table 设置一个最大高度。</p>
        <template>
            <el-table :data="tableData3" style="width:800px" max-height="250">
              <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
              <el-table-column prop="name" label="姓名" width="120"></el-table-column>
              <el-table-column prop="province" label="省份" width="120"></el-table-column>
              <el-table-column prop="city" label="市区" width="120"></el-table-column>
              <el-table-column prop="address" label="地址" width="300"></el-table-column>
              <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
              <el-table-column fixed="right" label="操作" width="120">
                <template slot-scope="scope">
                  <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">移除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        <p><b>多级表头</b></p>
        <p>数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。</p>
        <template>
          <el-table :data="tableData3" style="width: 100%">
            <el-table-column prop="date" label="日期" width="150"></el-table-column>
            <el-table-column label="配送信息">
              <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column label="地址">
                <el-table-column prop="province" label="省份" width="120"></el-table-column>
            </el-table-column>
            <el-table-column prop="address" label="地址" width="300"></el-table-column>
            <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
              </el-table-column>
            </el-table-column>
          </el-table>
        </template>
        <p><b>单选</b></p>
        <p>Table 组件提供了单选的支持，只需要配置highlight-current-row属性即可实现单选。之后由current-change事件来管理选中时触发的事件，它会传入currentRow，oldCurrentRow。如果需要显示索引，可以增加一列el-table-column，设置type属性为index即可显示从 1 开始的索引号。</p>
        <template>
          <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column property="date" label="日期" width="120"></el-table-column>
            <el-table-column property="name" label="姓名" width="120"></el-table-column>
            <el-table-column property="address" label="地址"></el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
            <el-button @click="setCurrent()">取消选择</el-button>
          </div>
        </template>
        <p><b>多选</b></p>
        <p>实现多选非常简单: 手动添加一个el-table-column，设type属性为selection即可；默认情况下若内容过多会折行显示，若需要单行显示可以使用show-overflow-tooltip属性，它接受一个Boolean，为true时多余的内容会在 hover 时以 tooltip 的形式显示出来</p>
        <template>
          <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="日期" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
          </div>
        </template>
        <p><b>排序</b></p>
        <p>对表格进行排序，可快速查找或对比数据。</p>
        <p>在列中设置sortable属性即可实现以该列为基准的排序，接受一个Boolean，默认为false。可以通过 Table 的default-sort属性设置默认的排序列和排序顺序。可以使用sort-method或者sort-by使用自定义的排序规则。如果需要后端排序，需将sortable设置为custom，同时在 Table 上监听sort-change事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了formatter属性，它用于格式化指定列的值，接受一个Function，会传入两个参数：row和column，可以根据自己的需求进行处理。</p>
        <template>
          <el-table :data="tableData" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}">
            <el-table-column prop="date" label="日期" sortable width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" sortable width="180"></el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
          </el-table>
        </template>
        <p><b>筛选</b></p>
        <p>在列中设置filtersfilter-method属性即可开启该列的筛选，filters 是一个数组，filter-method是一个方法，它用于决定某些数据是否显示，会传入三个参数：value, row 和 column。</p>
        <template>
          <el-table :data="tableData2" style="width: 100%">
            <el-table-column prop="date" label="日期" sortable width="180"
              :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]" :filter-method="filterHandler">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
            <el-table-column prop="tag" label="标签" width="100" :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]" :filter-method="filterTag" filter-placement="bottom-end">
              <template slot-scope="scope">
                <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <p><b>自定义模板</b></p>
        <p>自定义列的显示内容，可组合其他组件使用</p>
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="日期" width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="姓名"
              width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <p><b>展开行</b></p>
        <p>当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。</p>
        <p>通过设置 type="expand" 和 Scoped slot 可以开启展开行功能，el-table-column 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 Scoped slot 相同。</p>
        <template>
          <el-table :data="tableData5"
            style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="商品名称"><span>{{ props.row.name }}</span></el-form-item>
                  <el-form-item label="所属店铺"><span>{{ props.row.shop }}</span></el-form-item>
                  <el-form-item label="商品 ID"><span>{{ props.row.id }}</span></el-form-item>
                  <el-form-item label="店铺 ID"><span>{{ props.row.shopId }}</span></el-form-item>
                  <el-form-item label="商品分类"><span>{{ props.row.category }}</span></el-form-item>
                  <el-form-item label="店铺地址"><span>{{ props.row.address }}</span></el-form-item>
                  <el-form-item label="商品描述"><span>{{ props.row.desc }}</span></el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="商品 ID" prop="id"></el-table-column>
            <el-table-column label="商品名称" prop="name"></el-table-column>
            <el-table-column label="描述" prop="desc"></el-table-column>
          </el-table>
        </template>
        <p><b>表尾合计行</b></p>
        <p>若表格展示的是各类数字，可以在表尾显示各列的合计</p>
        <p>将show-summary设置为true就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过sum-text配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用summary-method并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。</p>
        <template>
          <el-table :data="tableData7" border show-summary style="width: 100%">
            <el-table-column prop="id" label="ID" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="amount1" sortable label="数值 1"></el-table-column>
            <el-table-column prop="amount2" sortable label="数值 2"></el-table-column>
            <el-table-column prop="amount3" sortable label="数值 3"></el-table-column>
          </el-table>

          <el-table :data="tableData7" border height="200" :summary-method="getSummaries" show-summary style="width: 100%; margin-top: 20px">
            <el-table-column prop="id" label="ID" width="180"> </el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="amount1" label="数值 1（元）"></el-table-column>
            <el-table-column prop="amount2" label="数值 2（元）"></el-table-column>
            <el-table-column prop="amount3" label="数值 3（元）"></el-table-column>
          </el-table>
        </template>
        <p><b>合并行或列</b></p>
        <p>多行或多列共用一个数据时，可以合并行或列。</p>
        <p>通过给table传入span-method方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行row、当前列column、当前行号rowIndex、当前列号columnIndex四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表rowspan，第二个元素代表colspan。 也可以返回一个键名为rowspan和colspan的对象。</p>
        <template>
          <div>
            <el-table :data="tableData" :span-method="arraySpanMethod" border style="width: 100%">
              <el-table-column prop="id" label="ID" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="amount1" sortable label="数值 1"></el-table-column>
              <el-table-column prop="amount2" sortable label="数值 2"></el-table-column>
              <el-table-column prop="amount3" sortable label="数值 3"></el-table-column>
            </el-table>

            <el-table :data="tableData" :span-method="objectSpanMethod" border  style="width: 100%; margin-top: 20px">
              <el-table-column prop="id" label="ID" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="amount1" label="数值 1（元）"></el-table-column>
              <el-table-column prop="amount2" label="数值 2（元）"></el-table-column>
              <el-table-column prop="amount3" label="数值 3（元）"></el-table-column>
            </el-table>
          </div>
      </template>
      <p><b>自定义索引</b></p>
      <p>通过给 type=index 的列传入 index 属性，可以自定义索引。该属性传入数字时，将作为索引的起始值。也可以传入一个方法，它提供当前行的行号（从 0 开始）作为参数，返回值将作为索引展示。</p>
      <template>
        <el-table :data="tableData7" style="width: 100%">
          <el-table-column type="index" :index="indexMethod"></el-table-column>
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </template>
      </div>
      <div class="box">
        <h2>Tag标签</h2>
        <p><b>基础用法</b></p>
        <el-tag>标签一</el-tag>
        <el-tag type="success">标签二</el-tag>
        <el-tag type="info">标签三</el-tag>
        <el-tag type="warning">标签四</el-tag>
        <el-tag type="danger">标签五</el-tag>
        <p><b>可移除标签</b></p>
        <p>设置closable属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置disable-transitions属性，它接受一个Boolean，true 为关闭。</p>
        <el-tag  v-for="tag in tags" :key="tag.name" closable :type="tag.type">
          {{tag.name}}
        </el-tag>
        <p><b>动态编辑标签</b></p>
        <el-tag  :key="tag"  v-for="tag in dynamicTags" closable  :disable-transitions="false" @close="handleClose(tag)">{{tag}}</el-tag>
        <el-input class="input-new-tag"  v-if="inputVisible"  v-model="inputValue"  ref="saveTagInput"  size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
        <p><b>不同尺寸</b></p>
        <el-tag closable>默认标签</el-tag>
        <el-tag size="medium" closable>中等标签</el-tag>
        <el-tag size="small" closable>小型标签</el-tag>
        <el-tag size="mini" closable>超小标签</el-tag>
      </div>
      <div class="box">
        <h2>Progress 进度条</h2>
        <p><b>线形进度条 — 百分比外显</b></p>
        <p>Progress 组件设置percentage属性即可，表示进度条对应的百分比，必填，必须在 0-100。</p>
        <el-progress :percentage="0"></el-progress>
        <el-progress :percentage="70"></el-progress>
        <el-progress :percentage="80" color="#8e71c7"></el-progress>
        <el-progress :percentage="100" status="success"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>
        <p><b>线形进度条 — 百分比内显</b></p>
        <p>Progress 组件可通过 stroke-width 属性更改进度条的高度，并可通过 text-inside 属性来将进度条描述置于进度条内部。</p>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
        <p><b>环形进度条</b></p>
        <p>Progress 组件可通过 type 属性来指定使用环形进度条，在环形进度条中，还可以通过 width 属性来设置其大小。</p>
        <el-progress type="circle" :percentage="0"></el-progress>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>
      </div>
      <div class="box">
        <h2>Pagination 分页</h2>
        <p><b>基础用法</b></p>
        <p>设置layout，表示需要显示的内容，用逗号分隔，布局元素会依次显示。prev表示上一页，next为下一页，pager表示页码列表，除此以外还提供了jumper和total，size和特殊的布局符号->，->后的元素会靠右显示，jumper表示跳页元素，total表示显示页码总数，size用于设置每页显示的页码数量。</p>
        <div class="block">
          <span class="demonstration">页数较少时的效果</span>
          <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">大于 7 页时的效果</span>
          <el-pagination layout="prev, pager, next" :total="1000"> </el-pagination>
        </div>
        <p><b>带有背景色的分页</b></p>
        <p>设置background属性可以为分页按钮添加背景色。</p>
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        <p><b>小型分页</b></p>
        <p>只需要一个small属性，它接受一个Boolean，默认为false，设为true即可启用</p>
        <el-pagination  small  layout="prev, pager, next" :total="50"></el-pagination>
        <p><b>附加功能</b></p>
        <p>此例是一个完整的用例，使用了size-change和current-change事件来处理页码大小和当前页变动时候触发的事件。page-sizes接受一个整型数组，数组元素为展示的选择每页显示个数的选项，[100, 200, 300, 400]表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。</p>
        <template>
          <div class="block">
            <span class="demonstration">显示总数</span>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
            </el-pagination>
          </div>
          <div class="block">
            <span class="demonstration">调整每页显示条数</span>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage2"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="sizes, prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
          <div class="block">
            <span class="demonstration">直接前往</span>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage3"
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="1000">
            </el-pagination>
          </div>
          <div class="block">
            <span class="demonstration">完整功能</span>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
          </div>
        </template>
      </div>
      <div class="box">
        <h2>Tree 树形控件</h2>
        <p><b>基础用法</b></p>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        <p><b>可选择</b>适用于需要选择层级时使用。</p>
        <el-tree :props="props" :load="loadNode" lazy  show-checkbox  @check-change="handleCheckChange"></el-tree>
        <p><b>禁用状态</b>可将 Tree 的某些节点设置为禁用状态,通过disabled设置禁用状态。</p>
        <el-tree :data="data3" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]"></el-tree>
        <p><b>树节点的选择</b></p>
        <el-tree :data="data2" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current :props="defaultProps"></el-tree>
        <div class="buttons">
          <el-button @click="getCheckedNodes">通过 node 获取</el-button>
          <el-button @click="getCheckedKeys">通过 key 获取</el-button>
          <el-button @click="setCheckedNodes">通过 node 设置</el-button>
          <el-button @click="setCheckedKeys">通过 key 设置</el-button>
          <el-button @click="resetChecked">清空</el-button>
        </div>
        <p><b>自定义节点内容</b></p>
        <p>可以通过两种方法进行树节点内容的自定义：render-content和 scoped slot。使用render-content指定渲染函数，该函数返回需要的节点区内容即可。渲染函数的用法请参考 Vue 文档。使用 scoped slot 会传入两个参数node和data，分别表示当前节点的 Node 对象和当前节点的数据。注意：由于 jsfiddle 不支持 JSX 语法，所以render-content示例在 jsfiddle 中无法运行。但是在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。</p>
        <div class="custom-tree-container">
          <div class="block">
            <p>使用 render-content</p>
            <el-tree :data="data4" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false" :render-content="renderContent"></el-tree>
          </div>
          <div class="block">
            <p>使用 scoped slot</p>
            <el-tree :data="data5" show-checkbox node-key="id" default-expand-all:expand-on-click-node="false">
              <span class="custom-tree-node" slot-scope="{ node, data }">
                <span>{{ node.label }}</span>
                <span>
                  <el-button type="text" size="mini" @click="() => append(data)"> Append</el-button>
                  <el-button type="text" size="mini" @click="() => remove(node, data)">Delete</el-button>
                </span>
              </span>
            </el-tree>
          </div>
        </div>
        <p><b>节点过滤</b>通过关键字过滤树节点</p>
        <el-input  placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
        <el-tree class="filter-tree" :data="data2" :props="defaultProps"default-expand-all :filter-node-method="filterNode" ref="tree2"></el-tree>
        <p><b>手风琴模式</b>对于同一级的节点，每次只能展开一个</p>
        <el-tree :data="data" :props="defaultProps" accordion  @node-click="handleNodeClick"></el-tree>
        <p><b>可拖拽节点</b>通过 draggable 属性可让节点变为可拖拽。</p>
        <el-tree :data="data6" node-key="id" default-expand-all @node-drag-start="handleDragStart" @node-drag-enter="handleDragEnter" @node-drag-leave="handleDragLeave" @node-drag-over="handleDragOver" @node-drag-end="handleDragEnd" @node-drop="handleDrop"  draggable :allow-drop="allowDrop" :allow-drag="allowDrag"></el-tree>
      </div>
      <div class="box">
        <h2>Badge 标记</h2>
        <p><b>基础用法</b></p>
        <el-badge :value="12" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>

        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="clearfix">
              评论
              <el-badge class="mark" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              回复
              <el-badge class="mark" :value="3" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <p><b>最大值</b></p>
        <el-badge :value="200" :max="99" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="100" :max="10" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
        <p><b>自定义内容</b></p>
        <el-badge value="new" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge value="hot" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
        <p><b>小红点</b></p>
        <el-badge is-dot class="item">数据查询</el-badge>
        <el-badge is-dot class="item">
          <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
        </el-badge>
      </div>
  </div>
</template>

<script>
let id = 1000;
export default {
  name: 'Data',
  data () {
     const data = [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
     }];
    return {
       filterText: '',
       data4: JSON.parse(JSON.stringify(data)),
       data5: JSON.parse(JSON.stringify(data)),
       tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
	      }, {	
	        date: '2016-05-04',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1517 弄'
	      }, {
	        date: '2016-05-01',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1519 弄'
	      }, {
	        date: '2016-05-03',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1516 弄'
	   }],
	   tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
       }],
	   tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }],
        tableData6: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],
        tableData7: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '公司'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '公司'
        }],
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ],
        currentRow: null,
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: '',
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1,
        props1: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
         data3: [{
          id: 1,
          label: '一级 2',
          children: [{
            id: 3,
            label: '二级 2-1',
            children: [{
              id: 4,
              label: '三级 3-1-1'
            }, {
              id: 5,
              label: '三级 3-1-2',
              disabled: true
            }]
          }, {
            id: 2,
            label: '二级 2-2',
            disabled: true,
            children: [{
              id: 6,
              label: '三级 3-2-1'
            }, {
              id: 7,
              label: '三级 3-2-2',
              disabled: true
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        data6: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2',
            children: [{
             id: 11,
              label: '三级 3-2-1'
            }, {
              id: 12,
              label: '三级 3-2-2'
            }, {
              id: 13,
              label: '三级 3-2-3'
            }]
          }]
        }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
    }
  },
  watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
  },
  methods: {
      indexMethod(index) {
        return index * 2;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleDragStart(node, ev) {
        console.log('drag start', node);
      },
      handleDragEnter(draggingNode, dropNode, ev) {
        console.log('tree drag enter: ', dropNode.label);
      },
      handleDragLeave(draggingNode, dropNode, ev) {
        console.log('tree drag leave: ', dropNode.label);
      },
      handleDragOver(draggingNode, dropNode, ev) {
        console.log('tree drag over: ', dropNode.label);
      },
      handleDragEnd(draggingNode, dropNode, dropType, ev) {
        console.log('tree drag end: ', dropNode && dropNode.label, dropType);
      },
      handleDrop(draggingNode, dropNode, dropType, ev) {
        console.log('tree drop: ', dropNode.label, dropType);
      },
      allowDrop(draggingNode, dropNode) {
        return dropNode.data.label !== '二级 3-1';
      },
      allowDrag(draggingNode) {
        return draggingNode.data.label.indexOf('三级 3-1-1') === -1;
      },
      handleNodeClick(data) {
        console.log(data);
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
      formatter(row, column) {
        return row.address;
      },
      handleClick(row) {
        console.log(row);
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
            </span>
          </span>);
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      },
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
       handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      },
      loadNode1(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region' }]);
        }
        if (node.level > 1) return resolve([]);

        setTimeout(() => {
          const data = [{
            name: 'leaf',
            leaf: true
          }, {
            name: 'zone'
          }];

          resolve(data);
        }, 500);
      }

  }
}
</script>
<style>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>