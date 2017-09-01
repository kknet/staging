<template>
  <div>
    <breadcrumb :items="breadcrumbText"></breadcrumb>
    <div class="base">
      <div class="base_wrapper">
        <el-row class="borrow_info">
          <el-col :span="5">借款额度：20,000元</el-col>
          <el-col :span="5">剩余额度：20,000元</el-col>
          <el-col :span="5">日利率：0.05%</el-col>
        </el-row>
        <el-row class="this_content base_info">
          <h1 class="font_size">基本信息</h1>
          <div class="info_content">
            <div class="flex">
              <div>姓名:张三</div>
              <div>身份证号：330251199502126545</div>
              <div>性别：女</div>
              <div>手机号：18632445666</div>
              <div>学历：本科</div>
              <div>户籍：新疆西藏</div>
              <div>年龄：20</div>
            </div>
            <div class="flex">
              <div>婚姻状况：未婚</div>
              <div>配偶职业：XXXX</div>
              <div>子女职业：企事业单位</div>
              <div class="address">居住地址：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
              <div>居住年限：3年</div>
            </div>
            <div class="flex">
              <div>
                <div class="text"><img src="../../assets/logo.png" alt=""></div>
                <div class="text">身份证正面</div>
              </div>
            </div>
            <div class="flex">
              <div>
                <div class="text"><img src="../../assets/logo.png" alt=""></div>
                <div class="text">身份证反面</div>
              </div>
            </div>
          </div>
        </el-row>
        <el-row class="this_content borrowRecord">
          <h1 class="font_size">我司借款记录</h1>
          <table>
            <thead>
              <tr>
                <th>借款时间</th>
                <th>借款金额</th>
                <th>借款总度</th>
                <th>状态</th>
                <th>逾期</th>
                <th>催收</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2015</td>
                <td>13958776325</td>
                <td>200000</td>
                <td>未结清</td>
                <td>无逾期</td>
                <td>--</td>
                <td>
                  <a type="text">查看详情</a>
                </td>
              </tr>
            </tbody>
          </table>
        </el-row>
        <el-row class="this_content eid_report">
          <h1 class="font_size">eid报告</h1>
          <div class="info_content">
            <el-col :span="3">
              <div class="circle">身份核实</div>
            </el-col>
            <el-col :span="3">
              <div class="circle">公安不良</div>
            </el-col>
            <el-col :span="3">
              <div class="circle">人法涉诉</div>
            </el-col>
            <el-col :span="3">
              <div class="circle">金融信贷</div>
            </el-col>
            <el-col :span="3">
              <div class="circle">其他综合</div>
            </el-col>
            <el-col :span="3">
              <a id="lookDetail">查看详情</a>
            </el-col>
          </div>
        </el-row>
        <el-row class="this_content store_info">
          <div class="top_section">
            <h1 class="font_size title">店铺信息</h1>
            <a id="editBtn" v-show="!isEdit" @click="isEdit =! isEdit">编辑</a>
            <div class="save_cancel" v-show="isEdit">
              <a id="saveBtn" @click="isEdit =! isEdit">保存</a>/
              <a id="cancelBtn" @click="isEdit =! isEdit">取消</a>
            </div>
          </div>
          <div class="info_content">
            <el-col :span="6">
              <div class="flex">
                <div>
                  <label>经营地址:</label>
                  <span v-show="!isEdit">与营业执照一致</span>
                  <el-input class="strore_input" value="与营业执照一致" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>商铺房产:</label>
                  <span v-show="!isEdit">自有房产</span>
                  <el-input class="strore_input" value="自有房产" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>经营行业:</label>
                  <span v-show="!isEdit">餐饮业</span>
                  <el-input class="strore_input" value="餐饮业" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>员工人数:</label>
                  <span v-show="!isEdit">2人</span>
                  <el-input class="strore_input" value="2人" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>月均人力成本:</label>
                  <span v-show="!isEdit">30,000元</span>
                  <el-input class="strore_input" value="30,000元" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>月均营业收入:</label>
                  <span v-show="!isEdit">30,000元</span>
                  <el-input class="strore_input" value="30,000元" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>经营年限：</label>
                  <span v-show="!isEdit">2年</span>
                  <el-input class="strore_input" value="2年" v-show="isEdit"></el-input>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="flex">
                <div>
                  <label>面积:</label>
                  <span v-show="!isEdit">100m²</span>
                  <el-input class="strore_input" value="100m²" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>评估价格:</label>
                  <span v-show="!isEdit">100W</span>
                  <el-input class="strore_input" value="100W" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>购买时间:</label>
                  <span v-show="!isEdit">2015-05-20</span>
                  <el-input class="strore_input" value="2015-05-20" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>所处区域:</label>
                  <span v-show="!isEdit">郊区</span>
                  <el-input class="strore_input" value="郊区" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>所处地段:</label>
                  <span v-show="!isEdit">商业区</span>
                  <el-input class="strore_input" value="商业区" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>是否抵押:</label>
                  <span v-show="!isEdit">否</span>
                  <el-input class="strore_input" value="否" v-show="isEdit"></el-input>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="flex">
                <div>
                  <label>安保套餐使用时长:</label>
                  <span v-show="!isEdit">6个月</span>
                  <el-input class="strore_input" value="6个月" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>有效开门率:</label>
                  <span v-show="!isEdit">70%</span>
                  <el-input class="strore_input" value="70%" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>客流统计使用时长:</label>
                  <span v-show="!isEdit">6个月</span>
                  <el-input class="strore_input" value="6个月" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>月均客流量:</label>
                  <span v-show="!isEdit">150</span>
                  <el-input class="strore_input" value="150" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>周均客流量:</label>
                  <span v-show="!isEdit">50</span>
                  <el-input class="strore_input" value="50" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>近三个月客流涨跌幅:</label>
                  <span v-show="!isEdit">-10%</span>
                  <el-input class="strore_input" value="-10%" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>近三周客流涨跌幅:</label>
                  <span v-show="!isEdit">+2%</span>
                  <el-input class="strore_input" value="+2%" v-show="isEdit"></el-input>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="flex">
                <div>
                  <label>月平均收银额:</label>
                  <span v-show="!isEdit">+2%</span>
                  <el-input class="strore_input" value="+2%" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>月平均收银笔数:</label>
                  <span v-show="!isEdit">+2%</span>
                  <el-input class="strore_input" value="+2%" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>收银台使用时长:</label>
                  <span v-show="!isEdit">+2%</span>
                  <el-input class="strore_input" value="+2%" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>是否连锁:</label>
                  <span v-show="!isEdit">是</span>
                  <el-input class="strore_input" value="是" v-show="isEdit"></el-input>
                </div>
                <div>
                  <label>收银台占比:</label>
                  <span v-show="!isEdit">60%</span>
                  <el-input class="strore_input" value="60%" v-show="isEdit"></el-input>
                </div>
              </div>
            </el-col>
          </div>
          <div class="imgs">
            <table>
              <tr>
                <td>店铺照片</td>
                <td>经营地证明</td>
                <td>网络销售渠道</td>
                <td>商业保险单</td>
              </tr>
              <tr>
                <td><img src="../../assets/logo.png" width="200" height="140" alt=""></td>
                <td><img src="../../assets/logo.png" width="200" height="140" alt=""></td>
                <td><img src="../../assets/logo.png" width="200" height="140" alt=""></td>
                <td><img src="../../assets/logo.png" width="200" height="140" alt=""></td>
              </tr>
            </table>
          </div>
        </el-row>
        <el-tabs class="house_prove" type="border-card">
          <el-tab-pane label="房产1">
            <el-row>
              <el-col :span="6">
                <div class="">房产类型：租赁</div>
                <div class=""><img src="../../assets/logo.png" width="200" height="140" alt=""></div>
                <div class="">租赁合同</div>
              </el-col>
              <el-col :span="6">
                <div class="">已租年限：1年</div>
                <div class=""><img src="../../assets/logo.png" width="200" height="140" alt=""></div>
                <div class="">电费缴费证明</div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="房产2">
            <el-row>
              <el-col :span="6">
                <div class="">房产类型：租赁</div>
                <div class=""><img src="../../assets/logo.png" width="200" height="140" alt=""></div>
                <div class="">租赁合同</div>
              </el-col>
              <el-col :span="6">
                <div class="">已租年限：2年</div>
                <div class=""><img src="../../assets/logo.png" width="200" height="140" alt=""></div>
                <div class="">电费缴费证明</div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="房产3">
            <el-row>
              <el-col :span="6">
                <div class="">房产类型：租赁</div>
                <div class=""><img src="../../assets/logo.png" width="200" height="140" alt=""></div>
                <div class="">租赁合同</div>
              </el-col>
              <el-col :span="6">
                <div class="">已租年限：3年</div>
                <div class=""><img src="../../assets/logo.png" width="200" height="140" alt=""></div>
                <div class="">电费缴费证明</div>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
        <el-tabs class="car_prove" type="border-card">
          <el-tab-pane label="车产1">
            <table>
              <tr>
                <td>品牌型号：宝马-X6-2.0T</td>
                <td>上牌时间：2017-02-21</td>
              </tr>
              <tr>
                <td>所在城市：杭州</td>
                <td>行驶里程数：5000km</td>
              </tr>
              <tr>
                <td>评估价格：14.23W</td>
                <td>是否抵押：否</td>
              </tr>
              <tr>
                <td>
                  <div>
                    <img src="../../assets/logo.png" width="200" height="140" alt="">
                  </div>
                  <div>租赁合同</div>
                </td>
                <td>
                  <div>
                    <img src="../../assets/logo.png" width="200" height="140" alt="">
                  </div>
                  <div>租赁合同</div>
                </td>
              </tr>
            </table>
          </el-tab-pane>
          <el-tab-pane label="车产2">
            <table>
              <tr>
                <td>品牌型号：宝马-X6-2.0T</td>
                <td>上牌时间：2017-02-21</td>
              </tr>
              <tr>
                <td>所在城市：杭州</td>
                <td>行驶里程数：5000km</td>
              </tr>
              <tr>
                <td>评估价格：14.23W</td>
                <td>是否抵押：是</td>
              </tr>
              <tr>
                <td>
                  <div>
                    <img src="../../assets/logo.png" width="200" height="140" alt="">
                  </div>
                  <div>租赁合同</div>
                </td>
                <td>
                  <div>
                    <img src="../../assets/logo.png" width="200" height="140" alt="">
                  </div>
                  <div>租赁合同</div>
                </td>
              </tr>
            </table>
          </el-tab-pane>
        </el-tabs>
        <el-row class="this_content bank_card">
          <h1 class="font_size">银行卡</h1>
          <div class="info_content">
            <el-col :span="6">
              <div>银行：招商银行</div>
              <div>银行卡号：625996 6323 1235 456</div>
              <div><img src="../../assets/logo.png" alt=""></div>
            </el-col>
          </div>
        </el-row>
        <el-row class="this_content urgency_linkman">
          <h1 class="font_size">紧急联系人</h1>
          <div class="info_content">
            <table>
              <tr>
                <td>直系亲属：父母 - 李四-18632568952</td>
                <td>
                  <a class="width50">电审</a>
                </td>
                <td>近一次电审结果：电审通过（已联系）</td>
              </tr>
              <tr>
                <td>朋友1：王五-18632568952</td>
                <td>
                  <a class="width50">电审</a>
                </td>
                <td>近一次电审结果：电审通过（已联系）</td>
              </tr>
            </table>
          </div>
        </el-row>
        <el-row class="this_content evaluate_result">
          <h1 class="font_size">自评结果</h1>
          <div class="info_content">
            <table>
              <tr>
                <td>自评分数：5万</td>
                <td>自评额度：5万</td>
                <td>自评时间</td>
                <td>
                  <a class="width50" @click="dialogVisible = true">查看详情</a>
                  <el-dialog title="自评详情" style="text-align:center" :visible.sync="dialogVisible">
                    <div class="detail_content" style="text-align:left">
                      <div class="col">
                        <div>姓名：XXXX</div>
                        <div>性别：XX</div>
                        <div>年龄段：XXXX</div>
                        <div>户籍所在地：XXX</div>
                        <div>在用手机号使用时长：XX</div>
                        <div>居住地址：XXXX</div>
                        <div>居住地址：XXXX</div>
                      </div>
                      <div class="col">
                        <div>店铺全称：XXXX</div>
                        <div>所属行业：XX</div>
                        <div>实际经营地址：XXXX</div>
                        <div>店铺所在区域：XXX</div>
                        <div>店铺所处地段：XXXX</div>
                        <div>臻E盾安保套餐：XX</div>
                        <div>客流统计设备：XXXX</div>
                        <div>信鸽收银台：XXX</div>
                        <div>经营年限：XXXX</div>
                        <div>网络销售渠道：XXX</div>
                      </div>
                      <div class="col">
                        <div>是否有车：XX</div>
                        <div>品牌型号：XX</div>
                        <div>所在城市：XXXX</div>
                        <div>上牌时间：XXX</div>
                        <div>行使里程数：XXXX</div>
                        <div>是否抵押：XX</div>
                        <div>是否有房：XXXX</div>
                        <div>房产地址：XXX</div>
                        <div>面积：XXXX</div>
                        <div>市场价：XXX</div>
                        <div>是否抵押</div>
                      </div>
                    </div>
                    <div class="footer">
                      <el-button type="primary" @click="dialogVisible = false">关 闭</el-button>
                    </div>
                  </el-dialog>
                </td>
              </tr>
            </table>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import breadcrumb from '../../components/Breadcrumb'
export default {
  data() {
    return {
      breadcrumbText: [{
        title: '当前位置',
        path: ''
      }, {
        title: '用户管理',
        path: '/userManage'
      }, {
        title: '用户详情',
        path: ''
      }],
      isEdit: false,
      dialogVisible: false
    }
  },
  components: {
    breadcrumb
  }
}
</script>
<style lang="scss" scoped>
@import 'userDetail.scss'
</style>
