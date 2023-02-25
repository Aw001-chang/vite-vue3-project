import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useToastMessage } from './toastMessage';
import { scrollToTop } from '../composable/scrollTop';

export const useCart = defineStore('cart', () => {
  const isLoading = ref(false);
  // ----------------- toast訊息元件 ------------------------------
  const dataToastMessage = useToastMessage();
  const { pushMessage } = dataToastMessage;
  let msg;
  // ----------------- 加入購物車 ------------------------------
  const addToCart = async(id,qty) => {
    try {

      if (qty === undefined || qty === null) {

        msg = {
          style: 'danger',
          content: '未成功加入購物車，請選擇商品數量'
        }

      }else{

        const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart`;
        const cart = {
          product_id: id,
          qty: qty
        };
        isLoading.value = true;
        const res = await axios.post(api, { data: cart });
        getCart();
        isLoading.value = false;
        msg = {
          style: 'teal-700',
          content: '成功加入購物車'
        };

      }
    } catch (error) {

      msg = {
        style: 'danger',
        content: '未成功加入購物車'
      };

    } finally {
      pushMessage(msg);
    }

  };
  // ----------------- 更新購物車 ------------------------------
  const updateCart = async(item) => {
    try{
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.id,
        qty: item.qty
      };
      isLoading.value = true;
      const res = await axios.put(api, { data: cart });
      isLoading.value = false;
      getCart();
    }catch(error) {

    }
  };
  // ----------------- 取得購物車資訊 ------------------------------
  const cart = ref([]);
  const cartsLength = ref();
  const getCart = async() => {
    try{
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart`;
      const res = await axios.get(api);
      cart.value = res.data.data;
      cartsLength.value = res.data.data.carts.length;
    }catch(error) {

    }
  }
  // ----------------- 刪除購物車品項 ------------------------------
  const deleteCart = async(item) => {
    try{
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart/${item.id}`;
      const res = await axios.delete(api);
      getCart();
      msg = {
        style: 'teal-700',
        content: '成功刪除品項'
      };
    }catch(error) {
      msg = {
        style: 'danger',
        content: '未成功刪除品項'
      };
    }finally {
      pushMessage(msg);
    }
  }
  
  // ----------------- 送出訂單 ------------------------------
  const router = useRouter();
  const orderForm = ref({
    user:{
      name: '',
      email:'',
      tel: '',
      address:''
    },
    message:''
  })
  const createOrder = async() => {
    try{
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/order`;
      const order = orderForm;
      const res = await axios.post(api, {data: order.value});
      const orderId = res.data.orderId;
      router.push(`cart/checkout/${orderId}`);
    }catch(error) {
      console.log(error.response);
    }
  }
  // ----------------- 取得某一筆訂單 ------------------------------
  const inputOrderID = ref('');
  const orderList = ref({});
  const orderUser = ref({});
  const isNull = ref(false);

  const getOrder = async(orderId) => {
    try {
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/order/${orderId}`;
      isLoading.value = true;
      const res = await axios.get(api);
      isLoading.value = false;
      if (res.data.order !== null) {
        orderList.value = res.data.order;
        orderUser.value = res.data.order.user;
        isNull.value = true;
      }else{
        isNull.value = false;
        msg = {
          style: 'danger',
          content: '請輸入正確的訂單編號'
        };
        pushMessage(msg);
      }
    } catch(error) {
      if(res.data.success === false){
        console.log('erroe')
      };
      isLoading.value = false;
      msg = {
        style: 'danger',
        content: '請輸入訂單編號'
      };

    } finally{

      inputOrderID.value = '';
      scrollToTop();

    }
  }



  onMounted(getCart);
  return {
    isLoading,
    addToCart,
    getCart,
    cartsLength,
    cart,
    updateCart,
    deleteCart,
    createOrder,
    orderForm,
    getOrder,
    orderList,
    inputOrderID,
    orderUser,
    isNull
  };
})