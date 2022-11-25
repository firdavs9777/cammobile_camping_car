export default {
    async loadCarType(context){
        // if(!context.getters.get_car_type)
        // {
        //     return;
        // }
        let url = 'http://cammobile.kr/q/api/hash/?c=type'; 
        const response = await fetch(url,{
                method:"POST"
        });
        const responseData = await response.json();
        console.log(responseData);
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch');
            throw error;
        }
          let  car_types = [];
          for( const key in responseData)
         {
          const type =  {
            idx: responseData.idx,
            type_name: responseData.type_name
          }
          car_types.push(type)
        }
          console.log("Car Types"); 
          context.commit('setType',{car_types})
    }
}