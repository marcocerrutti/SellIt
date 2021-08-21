import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeparatorComponent from "../components/ListItemSeparator";
import Screen from '../components/Screen';
import Icon from "../components/Icon"

import colors from '../config/colors';

const menuItems =[
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
  
]

function AccountScreen(props) {
    return (
       <Screen style={styles.screen}>
           <View style={styles.cantainer}>
           <ListItem 
            title="Ludablink Hermes"
            subTitle="hermesandsuffice@gmail.com"
            image={require('../assets/mosh.jpg')}
            />
           </View>
           <View style={styles.cantainer}>
               <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparatorComponent}
                    renderItem={({item}) => (
                    <ListItem
                        title={item.title}
                        IconComponent={
                            <Icon 
                              name={item.icon.name} 
                              backgroundColor={item.icon.backgroundColor} 
                     />
                  }
                />
             )}
             />
           </View>
           <ListItem
            title ="Log Out"
            IconComponent={
                <Icon name="Logout" backgroundColor="#ffe66d" />
            } />
       </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.light,
    },
    cantainer:{
        marginVertical: 15,

    }
})

export default AccountScreen;