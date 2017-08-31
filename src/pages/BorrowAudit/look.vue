<template>
  <div>
    <div class="nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/base' }">借款审核</el-breadcrumb-item>
        <el-breadcrumb-item>审核详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="basereview">
      <div class="tabs">
        <div @click="curId=0" :class="{'active' :curId === 0}">基础额度审核</div>
        <div @click="curId=1" :class="{'active' :curId === 1}" class="quota">提额审核</div>
      </div>
      <div class="contents" v-show="curId===0">
        <div class="datainformation">
          <h1>基础信息</h1>
          <div class="left">
            <div class="title">
              <div>姓名:　　　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>身份证号:　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>性别:　　　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>手机号:　　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>学历:　　　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>户籍:　　　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>年龄:　　　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>年龄:　　　</div>
              <span>111</span>
            </div>
          </div>
          <div class="left-c">
            <div class="title">
              <div>姓名:　　　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>身份证号:　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>性别:　　　</div>
              <span>111</span>
            </div>
          </div>
          <div class="center"></div>
          <div class="right-c">
            <div>
              <div class="title">评分:　　　</div>
              <el-input-number v-model="num1" @change="handleChange" :min="0" :max="100" class="num"></el-input-number>
              <el-checkbox v-model="checked" class="disab">否决</el-checkbox>
            </div>
            <div class="right-b">
              <div class="title">
                <div>备注:　　　</div>
                <textarea>111</textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="datainformation">
          <h1>我司借款记录</h1>
          <div class="left">
            <div class="title">
              <div>姓名:　　　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>身份证号:　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>性别:　　　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>手机号:　　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>学历:　　　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>户籍:　　　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>年龄:　　　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>年龄:　　　</div>
              <span>111</span>
            </div>
          </div>
          <div class="left-c">
            <div class="title">
              <div>姓名:　　　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>身份证号:　</div>
              <span>111</span>
            </div>
            <div class="title">
              <div>性别:　　　</div>
              <span>111</span>
            </div>
          </div>
          <div class="center"></div>
          <div class="right-c">
            <div>
              <div class="title">评分:　　　</div>
              <el-input-number v-model="num1" @change="handleChange" :min="0" :max="100" class="num"></el-input-number>
              <el-checkbox v-model="checked" class="disab">否决</el-checkbox>
            </div>
            <div class="right-b">
              <div class="title">
                <div>备注:　　　</div>
                <textarea>111</textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="eid">
          <h1>Eid报告</h1>
          <div class="left">
            <div class="title">
              <div>身份核验</div>
            </div>
            <div class="title">
              <div>公安不良</div>
            </div>
            <div class="title">
              <div>人法涉诉</div>
            </div>
            <div class="title">
              <div>金融信贷</div>
            </div>
          </div>

          <div class="center"></div>
          <div class="right-c">
            <div>
              <div class="title">评分:　　　</div>
              <el-input-number v-model="num1" @change="handleChange" :min="0" :max="100" class="num"></el-input-number>
              <el-checkbox v-model="checked" class="disab">否决</el-checkbox>
            </div>
            <div class="right-b">
              <div class="title">
                <div>备注:　　　</div>
                <textarea>111</textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="shopinformation">
          <h1>店铺信息
            <span id="eidt">编辑</span>
          </h1>
          <div style="height:260px;">
            <div class="left">
              <div class="title">
                <div>经营地址:　　　　</div>
                <span>111</span>
              </div>
              <div class="title">
                <div>商铺房产:　　　　</div>
                <span>111</span>
              </div>
              <div class="title">
                <div>经营行业:　　　　</div>
                <span>111</span>
              </div>
              <div class="title">
                <div>员工人数:　　　　</div>
                <span>111</span>
              </div>
              <div class="title">
                <div>月均营业收入:　　</div>
                <span>111</span>
              </div>
              <div class="title">
                <div class="title-inpt">经营年限:　　　　</div>
                <el-input class="title-inpts" v-model="input" placeholder="请输入经营年限"></el-input>
              </div>
              <div class="title" style="margin-top:20px;">
                <div>安保套餐使用时长:</div>
                <span>111</span>
              </div>
              <div class="title">
                <div>有效开门率:　　　</div>
                <span>111</span>
              </div>
            </div>
            <div class="left-c" style="margin-left:20px;">
              <div class="title">
                <div>面积:　　　</div>
                <span>111</span>
              </div>
              <div class="title" style="margin-top:-10px;">
                <div>评估价格:　</div>
                <el-input class="title-inpts" v-model="input" placeholder="请输入经营年限"></el-input>
              </div>
              <div class="title">
                <div>购买时间:　</div>
                <el-select v-model="value" placeholder="请选择" style="width:150px;">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="title">
                <div>所处区域:　</div>
                <el-select v-model="value" placeholder="请选择" style="width:150px;">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="title">
                <div>所处地段:　</div>
                <el-select v-model="value" placeholder="请选择" style="width:150px;">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="title">
                <div>是否抵押:　</div>
                <el-select v-model="value" placeholder="请选择" style="width:150px;">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="title" style="margin-top:20px;">
                <div>客流统计:　</div>
                <span>111</span>
              </div>
              <div class="title">
                <div>安保到期日:</div>
                <span>111</span>
              </div>
            </div>
            <div class="center"></div>
            <div class="right-c">
              <div>
                <div class="title">评分:　　　</div>
                <el-input-number v-model="num1" @change="handleChange" :min="0" :max="100" class="num"></el-input-number>
                <el-checkbox v-model="checked" class="disab">否决</el-checkbox>
              </div>
              <div class="right-b">
                <div class="title">
                  <div>备注:　　　</div>
                  <textarea>111</textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <h1>店铺照片</h1>
            <h1>安保合同</h1>
            <div class="bottom-img"></div>
          </div>
        </div>
        <div></div>
      </div>
      <div v-show="curId===1" class="impove">
        <div class="model" style="height:230px;">
          <h1>信鸽收银台</h1>
          <div class="left">
            <div class="title">
              <div>收银台账号:　　</div>
              <span>111</span>
            </div>
            <div class="title titles">
              <div class="title-inpt">月平均收银额:　</div>
               <el-input class="title-inpts" v-model="input"></el-input>
               <span class="com-dc">元</span>
            </div>
            <div class="title titles" style="margin-top:20px;">
              <div>月平均收银笔数:　</div>
               <el-input class="title-inpts" v-model="input"></el-input>
                <span class="com-bi">笔</span>
            </div>
          </div>
          <div class="left-c" style="margin-left:100px;">
            <div class="title titles">
              <div>收银台使用时长:</div>
              <el-input class="title-inpts" v-model="input"></el-input>
                <span class="com-ge">个月</span>
            </div>
            <div class="title titles" style="margin-top:20px;">
              <div>是否连锁:　</div>
              <el-select v-model="value" placeholder="请选择" style="width:150px;">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
            </div>
            <div class="title" style="margin-top:20px;">
              <div>收银台占比:　　　</div>
              <span>111</span>
            </div>
          </div>
          <div class="center" id="line"></div>
          <div class="right-c">
            <div>
              <div class="title">评分:　　　</div>
              <el-input-number v-model="num1" @change="handleChange" :min="0" :max="100" class="num"></el-input-number>
              <el-checkbox v-model="checked" class="disab">否决</el-checkbox>
            </div>
            <div class="right-b">
              <div class="title">
                <div>备注:　　　</div>
                <textarea>111</textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="model" style="height:230px;">
          <h1>客流统计</h1>
          <div class="left">
            <div class="title titles">
              <div>客流统计使用时长:</div>
              <el-input class="title-inpts" v-model="input"></el-input>
               <span class="com-tj-sc">元</span>
            </div>
            <div class="title titles" style="margin-top:20px;">
              <div class="title-inpt">月均客流量:　</div>
              <span>1111</span>
               <span class="com-tj-ll">元</span>
            </div>
            <div class="title titles" style="margin-top:20px;">
              <div>周均客流量:　</div>
               <el-input class="title-inpts" v-model="input"></el-input>
                <span class="com-tj-yll">笔</span>
            </div>
          </div>
          <div class="left-c" style="margin-left:100px;">
            <div class="title titles">
              <div>近三个月客流涨跌幅:</div>
              <el-input class="title-inpts" v-model="input"></el-input>
                <span class="com-ge">个月</span>
            </div>
            <div class="title titles" style="margin-top:20px;">
              <div>近三周客流涨跌幅:　</div>
              <el-input class="title-inpts" v-model="input"></el-input>
                <span class="com-ge">个月</span>
            </div>
          </div>
          <div class="center" id="tjcenter"></div>
          <div class="right-c">
            <div>
              <div class="title">评分:　　　</div>
              <el-input-number v-model="num1" @change="handleChange" :min="0" :max="100" class="num"></el-input-number>
              <el-checkbox v-model="checked" class="disab">否决</el-checkbox>
            </div>
            <div class="right-b">
              <div class="title">
                <div>备注:　　　</div>
                <textarea>111</textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="model" style="height:230px;">
          <h1>网络销售渠道</h1>
          <div class="left">
            <div class="title">
              <div>收银台账号:　　</div>
              <span>111</span>
            </div>

          </div>
          <div class="left-c" style="margin-left:100px;">
            <!-- <div class="title titles">
              <div>收银台使用时长:</div>
              <el-input class="title-inpts" v-model="input"></el-input>
                <span class="com-ge">个月</span>
            </div> -->
          </div>
          <div class="center" id="wlqd"></div>
          <div class="right-c">
            <div class="title">
              <div>收银台账号:　　</div>
              <span>111</span>
            </div>
            <br>
            <div class="title">
              <div>收银台账号:　　</div>
              <span>111</span>
            </div>
             <br>
            <div class="title">
              <div>收银台账号:　　</div>
              <span>111</span>
            </div>
          </div>
        </div>
        <div class="model" style="height:230px;">
          <h1>商业保险单</h1>
          <div class="left">
            <div class="title">
              <div>收银台账号:　　</div>
              <span>111</span>
            </div>
          </div>
          <div class="left-c" style="margin-left:100px;">
            <div class="title titles">
              <div>收银台使用时长:</div>
              <el-input class="title-inpts" v-model="input"></el-input>
                <span class="com-ge">个月</span>
            </div>
            <div class="title titles" style="margin-top:20px;">
              <div>是否连锁:　</div>
              <el-select v-model="value" placeholder="请选择" style="width:150px;">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
            </div>
            <div class="title" style="margin-top:20px;">
              <div>收银台占比:　　　</div>
              <span>111</span>
            </div>
          </div>
          <div class="center"></div>
          <div class="right-c">
            <div>
              <div class="title">评分:　　　</div>
              <el-input-number v-model="num1" @change="handleChange" :min="0" :max="100" class="num"></el-input-number>
              <el-checkbox v-model="checked" class="disab">否决</el-checkbox>
            </div>
            <div class="right-b">
              <div class="title">
                <div>备注:　　　</div>
                <textarea>111</textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './base.scss'
import './review.scss'
export default {
  data() {
    return {
      curId: 0,
      num1: '',
      checked: true,
      input: '',
      options: [
        {}
      ],
      value: ''
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>


