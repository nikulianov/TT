import React from 'react'
import {Text, TextInput, View} from 'react-native'
import TextInputMask from 'react-native-text-input-mask';
import {useForm, Controller} from 'react-hook-form'
import MainLayout from '../../HOC/MainLayout'
import {style} from './style'
import ButtonUi from '../../components/ui/button'

type FormData = {
  phone: string;
  password: string;
};

const Login = () => {
  const {control, handleSubmit, formState: {errors}} = useForm<FormData>({
    defaultValues: {
      phone: '',
      password: ''
    }
  })
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  });
  return (
      <MainLayout>
        <View style={style.wrapper}>
          <View style={style.formContent}>
            <Text style={style.title}>Вход</Text>
            <View style={style.form}>
              <Controller
                  control={control}
                  name="phone"
                  rules={{
                    required: true,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                      <TextInputMask
                          style={style.input}
                          mask={"+7 ([000]) [000] [00] [00]"}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          value={value}
                          placeholder="Номер телефона"
                          keyboardType="numeric"
                      />
                  )}
              />
              <Controller
                  control={control}
                  name="password"
                  rules={{
                    required: true,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                      <TextInput
                          style={style.input}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          value={value}
                          placeholder="Пароль"
                          secureTextEntry
                      />
                  )}
              />
              <ButtonUi style={style.btn} title="Войти" onPress={onSubmit}/>
            </View>
          </View>
        </View>
      </MainLayout>
  )
}

export default Login
