export default{
  template:'#search-form',
  props:['value'],
  // Props : 내부값을 상위 변수로 받는다.(query 값을 SearchForm바깥으로 value값으로 받는다.)
  data(){
    return{
      inputValue:this.value
      // query
    }
  },
  watch:{
    // 뷰모델 감시
    value(newVal,oldVal){
      this.inputValue = newVal
    }
  },
  methods:{
    onSubmit(){
      this.$emit('@submit', this.inputValue.trim())
    },
    onKeyup(){
      if (!this.inputValue.length) this.onReset()
    },
    onReset(){
      this.inputValue = ''
      this.$emit('@reset')
    }
  }
}
// $emit():child->parent
