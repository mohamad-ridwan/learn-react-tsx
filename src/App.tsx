import { MouseEvent, useState, useEffect } from 'react'
import './App.css';
import { Home } from './components/auth/Home';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { Verification } from './components/auth/Verification';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ContextMovieListProvider } from './components/context/MovieList';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { List } from './components/generics/List';
import { Heading } from './components/Heading';
import { CustomButton } from './components/html/Button';
import { CustomInput } from './components/html/Input';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Test } from './components/polymorphic/Test';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Status } from './components/Status';
import { Toast } from './components/templateliterals/Toast';
import { HomePage } from './pages/Home';

function App() {
  const [listDataUserBuyProduct, setListDataUserBuyProduct] = useState<string[]>([
    'ridwan',
    'wawan',
    'iwan'
  ])
  const [listDataIdProduct, setListDataIdProduct] = useState<number[]>([
    223,
    444,
    555,
    111
  ])
  type TListData = {
    id: number
    nameProduk: string
    discount: string
  }
  const [listDataSold, setListDataSold] = useState<TListData[]>([
    {
      id: 1,
      nameProduk: 'makaroni',
      discount: '50%'
    },
    {
      id: 2,
      nameProduk: 'mozarella',
      discount: '20%'
    },
    {
      id: 3,
      nameProduk: 'basreng',
      discount: '60%'
    }
  ])
  type TInputData = {
    data: {
      id: number,
      username: string,
      email: string
    }
  }
  const [inputData, setInputData] = useState<TInputData>({
    data: {
      id: 0,
      username: '',
      email: ''
    }
  })

  useEffect(() => {
    setInputData({
      data: {
        id: 22,
        username: 'ridwan',
        email: 'iwan@gmail.com'
      }
    })
  }, [])

  interface IUser {
    firstName: string
    lastName: string
  }

  const user: IUser = {
    firstName: 'ulfa',
    lastName: 'assyyifah'
  }

  const dataPersonList: Array<IUser> = [
    {
      firstName: 'mohamad',
      lastName: 'ridwan'
    },
    {
      firstName: 'ulfa',
      lastName: 'assyifah'
    },
    {
      firstName: 'ulfa',
      lastName: 'cantik'
    }
  ]

  function click(e: MouseEvent<HTMLButtonElement>, value: string): void {
    e.preventDefault()
    alert(value)
  }

  const clickList = <T extends {}>(data: T): void => {
    console.log(data)
  }

  const clickUser = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    console.log(inputData)
  }

  return (
    <UserContextProvider>
      <ContextMovieListProvider>
      <div className="App">
        {/* RENDER COMPONENT FROM COMPONENT WITH PROPS COMPONENT (ComponentType) */}
        {/* <Private isLoggedIn component={Profile} /> */}
        {/* <Private isLoggedIn component={Home} /> */}
        {/* <Private isLoggedIn={false} component={Verification} /> */}
        {/* <User/> */}
        {/* <Person name={user}/>
      <PersonList user={dataPersonList}/>
      <Status status='sukses'/>
      <Heading title='user online' totalUserOn={40}>Contact Online</Heading>
      <Oscar>
        <Heading title='title children component'>isi children komponen</Heading>
      </Oscar>
      <Button click={(e, name)=>{click(e, name)}}/>
      <Input value='' handleChange={(event):void =>console.log(event)}/>
      <Container styles={{border: '1px solid black', padding: '1rem'}}/> */}
        {/* <List
          title='pembeli produk'
          list={listDataUserBuyProduct}
          clickList={clickList}
        /> */}
        {/* <List
          title='id produk yang telah terjual'
          list={listDataIdProduct}
          clickList={clickList}
        /> */}
        {/* <List
          title='produk yang telah terjual'
          list={listDataSold}
          clickList={clickList}
        /> */}
        {/* <RandomNumber value={10} isPositive /> */}
        {/* <Toast position={50} /> */}
        {/* <CustomButton friends='add-friends'>
          Add friends
        </CustomButton> */}
        {/* <CustomInput errMsg='err' placeholder='input here'/> */}
        <Test color='text-gray-700' asElement="a" href='#'>
          <span>click this link.</span>
        </Test>
        <HomePage/>
      </div>
      </ContextMovieListProvider>
    </UserContextProvider>
  );
}

export default App;
