import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { StyleSheet, Text, View, TextInput, Dimensions, Touchable, TouchableOpacity } from 'react-native';
import ButtonLogin from './components/buttons/ButtonLogin';
import ButtonCreateAccount from './components/buttons/ButtonCreateAccount';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const {width, height} = Dimensions.get('window');
const Stack = createNativeStackNavigator();

function LogoSvgTele() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="160pt"
      height="160pt"
      viewBox="0 0 2000.000000 1016.000000"
    >
      <Path
        d="M2200 7575c-486-124-655-733-301-1085 201-200 492-246 750-119 162 80 295 248 337 425 22 96 15 265-15 354-66 192-219 345-411 411-83 28-276 36-360 14zM3720 7574c-287-77-481-325-482-619-1-117 15-192 62-290 115-237 350-376 615-363 281 15 508 196 591 473 29 96 25 267-10 372-33 101-106 214-184 283-64 58-188 122-277 145-75 19-242 19-315-1zM5247 7575c-177-45-336-174-417-338-126-256-79-548 120-747 327-327 876-215 1057 215 51 120 57 318 14 445-66 193-217 345-411 411-84 29-275 36-363 14zM15080 7277c-51-17-78-39-100-83-60-118 31-253 163-241 54 5 91 28 125 77 31 46 31 134-1 180-40 61-120 89-187 67zM12924 7118c-55-83-103-157-107-165-6-10 14-13 111-13h118l137 165 137 165h-298l-98-152zM11957 7229c-81-19-144-65-180-134-18-34-22-61-25-177l-4-138h-198v-270h200v-890h280v890h250v270h-250v76c0 70 2 78 29 105 28 28 33 29 125 29h96v250l-142-1c-79-1-160-5-181-10zM7390 7070v-140h480V5620h290l2 653 3 652 238 3 237 2v280H7390v-140zM9860 6415v-795h280v1590h-280v-795zM8958 6784c-190-46-350-196-409-384-29-92-35-245-15-340 19-90 69-197 124-266 53-67 157-136 257-170 68-23 97-27 195-28 161 0 253 29 368 117 57 43 129 137 155 200l16 37h-292l-47-44c-168-157-449-58-504 176l-6 28 437 2 438 3 3 98c2 65-3 119-13 159-52 203-209 362-410 413-73 18-220 18-297-1zm275-247c60-25 120-92 147-163 11-30 20-59 20-64 0-6-113-10-295-10-335 0-314-7-271 87 72 154 240 217 399 150zM10742 6780c-105-28-167-64-252-150-130-129-176-256-167-465 7-181 55-296 173-412 212-209 591-215 807-13 58 54 137 168 137 197 0 10-34 13-143 13h-143l-47-45c-74-70-183-93-294-60-91 27-186 133-208 233l-7 32h870l6 31c21 105-9 268-70 377-72 129-210 233-355 267-88 20-218 18-307-5zm295-246c29-14 64-39 79-57 26-31 64-106 79-154l6-23h-602l6 23c39 128 120 209 235 234 70 15 131 8 197-23zM12766 6784c-209-51-376-225-421-439-96-456 247-822 695-741 224 40 397 202 454 423 21 79 21 259 1 338-53 208-206 363-410 415-93 24-231 25-319 4zm257-260c64-22 140-92 174-162 25-51 28-67 28-162 0-92-3-112-26-160-70-150-205-216-357-175-58 16-75 26-128 79-69 69-92 121-101 227-7 81 21 183 67 247 75 104 219 148 343 106zM14159 6778c-37-13-92-43-122-66-31-23-58-42-60-42-3 0-8 17-11 38-14 77-4 72-147 72h-129V5620h280v340c0 207 4 359 11 390 31 145 190 226 342 174 61-21 130-96 146-158 7-29 11-169 11-395v-351h281l-3 413c-4 464-4 465-81 579-82 122-188 178-352 185-86 3-110 0-166-19zM15905 6790c-115-23-245-97-315-178-52-61-104-161-126-242-22-86-23-253 0-340 57-224 230-385 456-426 207-37 407 24 528 161 49 56 120 192 129 248l6 37h-279l-21-43c-51-106-123-150-243-151-63-1-84 4-132 27-63 31-114 84-150 156-20 40-23 61-23 156s3 117 24 163c30 66 113 144 177 166 136 46 284-8 345-126l19-38h283l-7 33c-3 17-24 69-46 114-72 145-205 250-358 282-60 12-207 13-267 1zM17068 6784c-164-39-293-163-327-313l-9-41h143c141 0 143 0 149 23 3 13 22 40 43 60 64 64 174 82 254 41 62-31 109-113 109-191v-31l-212-4c-187-4-220-7-273-27-179-65-263-190-253-375 5-93 26-143 90-212 141-153 464-161 630-15 20 17 39 28 41 24 3-4 8-29 12-55l7-48h239l-3 428-3 428-38 76c-60 121-174 208-315 237-71 15-214 13-284-5zm360-727c-6-71-26-117-71-165-87-91-305-96-362-8-25 37-30 106-12 142 39 75 95 92 301 93l149 1-5-63zM14990 6200v-580h280v1160h-280v-580zM3805 6064c-11-2-45-9-75-15-214-42-416-239-476-464-21-79-20-251 1-330 60-222 239-401 463-461 76-20 248-20 327 1 175 45 338 178 413 336 22 46 45 105 51 131 58 244-26 501-216 659-126 105-349 170-488 143zM7530 4170v-800h180v720h780v170h-780v540h820v170H7530v-800zM13685 4948c-61-34-66-143-8-188 28-22 87-27 126-9 68 31 76 140 13 191-24 20-100 24-131 6zM11090 4670v-160h-190v-160h190v-419c0-273 4-430 11-448 15-40 48-73 94-94 33-15 65-19 183-19h142v160h-112c-62 0-118 4-125 8-29 18-33 70-33 438v374h270v159l-132 3-133 3-3 158-3 157h-159v-160zM3713 4520c-224-59-400-235-458-461-20-77-23-221-6-304 16-77 79-207 130-268 206-247 564-309 838-145 130 77 242 226 289 383 29 96 25 267-10 372-33 101-106 214-184 283-64 58-188 122-277 145-82 21-232 19-322-5zM8971 4515c-72-20-144-61-193-108-41-40-91-136-102-194l-5-33h166l17 45c56 144 297 200 443 102 62-42 102-118 105-202l3-60-240-6c-197-5-249-9-290-24-100-37-168-96-207-180-19-42-23-67-23-150 0-89 3-106 28-156 34-69 100-132 175-167 77-35 232-43 328-17 72 19 174 80 199 119 22 34 31 27 39-31 12-86 10-83 87-83h70l-3 433c-3 406-4 435-23 479-47 109-117 178-224 219-74 29-269 37-350 14zm431-678c-7-185-124-308-313-332-69-9-156 8-201 38-108 73-103 249 9 318 61 38 132 48 328 46l180-2-3-68zM10173 4511c-206-59-353-243-384-479-34-260 76-505 276-617 80-45 161-65 265-65 157 0 281 50 375 152 51 55 105 150 119 211l6 27h-166l-23-50c-30-66-115-143-183-166-69-23-178-24-243-1-104 36-189 123-236 245-33 83-33 261 0 344 66 170 192 262 356 262 134 0 245-62 301-168l29-56h165l-6 28c-14 57-75 162-122 209-57 57-165 116-240 132-78 16-217 12-289-8zM12027 4516c-92-27-160-68-232-140-118-118-165-243-165-440 0-189 48-314 165-432 116-117 235-161 412-152 204 11 363 117 453 303 80 166 78 408-4 576-62 126-165 220-294 270-72 28-260 36-335 15zm278-167c148-55 245-217 245-409 0-250-156-431-375-434-162-2-294 98-356 270-31 84-31 244 0 329 79 220 280 321 486 244zM14500 4516c-67-19-127-53-176-98-24-22-44-39-45-37s-6 31-13 64l-11 60-72 3-73 3V3370h170v757l31 61c17 34 49 78 72 98 172 149 412 104 506-95l26-56 3-382 3-383h169v358c0 196-5 386-10 422-14 86-69 198-128 256-28 28-77 62-121 82-68 33-83 36-180 39-66 1-123-2-151-11zM15680 4516c-137-40-248-129-313-253-47-90-67-175-67-288 0-262 137-467 357-535 91-28 241-28 325 1 65 22 151 72 182 108 11 11 23 21 28 21 6 0 8-60 6-147-3-125-7-155-25-194-27-60-86-119-147-147-90-43-257-45-349-4-64 28-133 95-153 148l-17 44h-164l8-46c27-146 179-282 356-319 259-55 514 39 608 225 52 103 55 135 55 783v597h-147l-7-52c-14-106-11-104-70-51-28 25-84 62-125 81-69 33-82 36-185 39-70 1-127-2-156-11zm222-147c80-17 139-52 196-113 64-71 93-144 100-254 12-204-98-372-273-417-79-20-120-19-198 5-160 50-257 193-258 382 0 127 38 227 117 303 87 85 200 118 316 94zM12930 3940v-570h169l3 413 3 414 30 48c22 36 45 57 84 77 50 26 61 28 177 28h124v160h-122c-158 0-191-10-250-70-50-52-52-52-63 24l-7 46h-148v-570zM13660 3940v-570h170v1140h-170v-570z"
        transform="matrix(.1 0 0 -.1 0 1016)"
      />
    </Svg>
  )
}

function LoginScreen(){

  const navigation = useNavigation();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((resp)=>{
      console.log("Account create");
      console.log(resp);
    })
    .catch(error => {
      console.log(error);
    })
  }

  const handleSingIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(()=>{
      console.log("Signed in");
      const user = auth.userCredential;
      console.log(user);
      navigation.navigate('Home');
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.containerSvgLogo}>
          <LogoSvgTele />
        </View>

        <Text style={styles.tittle}>Iniciar sesión</Text>
        <Text style={styles.subTittle}>Ingresa tus credenciales</Text>

        <TextInput 
          style={styles.textInput}
          placeholder='example@email.com'
          autoComplete='none'
          onChangeText={(text)=> setEmail(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder='***************'
          autoComplete='none'
          secureTextEntry={true}
          onChangeText={(text)=> setPassword(text)}
        />

        <TouchableOpacity style={stylesButtons.container} onPress={handleSingIn}>
          <ButtonLogin />
        </TouchableOpacity>

        <TouchableOpacity style={stylesButtons.container} onPress={handleCreateAccount}>
          <ButtonCreateAccount />
        </TouchableOpacity>
        
    </View>
  )
}

function HomeScreen(){
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.containerSvgLogo}>
          <LogoSvgTele />
        </View>

        <Text style={styles.tittle}>Bienvenido</Text>
        <Text style={styles.subTittle}>Haz iniciado en nuestra aplicacion</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE8E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSvgLogo: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  tittle: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold'
  },
  subTittle: {
    fontSize: 15,
    color: 'gray'
  },
  textInput: {
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'center'
  }
});

const stylesButtons = StyleSheet.create({
  container:{
    flex: 1,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
