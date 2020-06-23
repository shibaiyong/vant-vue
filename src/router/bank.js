export default [
    {
      path: '/bank/banklist',
      name: 'banklist',
      component: () => import('@/views/bank/BankList')
    },
    {
        path: '/bank/bankadd',
        name: 'bankadd',
        component: () => import('@/views/bank/BankAdd')
    },
    {
      path: '/bank/bankupdate',
      name: 'bankupdate',
      props: true,
      component: () => import('@/views/bank/BankUpdate')
    }
  ];
  