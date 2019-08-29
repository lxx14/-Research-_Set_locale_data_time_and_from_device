import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, RectButton } from 'react-native-gesture-handler';
import AppleStyleSwipeableRow from './AppleStyleSwipeableRow';

const SwipeableRow = ({ item }) => { // здесь в HOC AppleStyleSwipeableRow заворачиваем элемент (строка списка и т.д.), который будет свайпаться
    return (
        <AppleStyleSwipeableRow>
            <RectButton style={styles.rectButton} onPress={() => alert(item.from)}
            //описываем наполнение элемента (сторки списка), из которого будет состоять наш список (как в map массивов) - элемент FlatList
            >
                <Text style={styles.fromText}>{item.from}</Text>
                <Text numberOfLines={2} style={styles.messageText}>
                    {item.message}
                </Text>
            </RectButton>
        </AppleStyleSwipeableRow>
    );
};

export default class OpenGL extends Component {  // как итог возвращаем FlatList из наших swipeable строк 
    render() {
        return (
            <FlatList
                data={DATA}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item }) => (
                    <SwipeableRow item={item} />
                )}
                keyExtractor={(item, index) => `message ${index}`}
            />
        );
    }
}

const styles = StyleSheet.create({    //стили для FlatList
    rectButton: {
        flex: 1,
        height: 80,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    separator: {
        backgroundColor: 'rgb(200, 199, 204)',
        height: 1
    },
    fromText: {
        fontWeight: 'bold',
        backgroundColor: 'transparent',
    },
    messageText: {
        color: '#999',
        backgroundColor: 'transparent',
    },
});

const DATA = [   //данные, передаваемые в FlatList
    {
        from: "D'Artagnan",
        when: '3:11 PM',
        message:
            'Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque',
    },
    {
        from: 'Aramis',
        when: '11:46 AM',
        message:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus hendrerit ligula dignissim maximus aliquet. Integer tincidunt, tortor at finibus molestie, ex tellus laoreet libero, lobortis consectetur nisl diam viverra justo.',
    },
    {
        from: 'Athos',
        when: '6:06 AM',
        message:
            'Sed non arcu ullamcorper, eleifend velit eu, tristique metus. Duis id sapien eu orci varius malesuada et ac ipsum. Ut a magna vel urna tristique sagittis et dapibus augue. Vivamus non mauris a turpis auctor sagittis vitae vel ex. Curabitur accumsan quis mauris quis venenatis.',
    },
    {
        from: 'Porthos',
        when: 'Yesterday',
        message:
            'Vivamus id condimentum lorem. Duis semper euismod luctus. Morbi maximus urna ut mi tempus fermentum. Nam eget dui sed ligula rutrum venenatis.',
    },
    {
        from: 'Domestos',
        when: '2 days ago',
        message:
            'Aliquam imperdiet dolor eget aliquet feugiat. Fusce tincidunt mi diam. Pellentesque cursus semper sem. Aliquam ut ullamcorper massa, sed tincidunt eros.',
    },
    {
        from: 'Cardinal Richelieu',
        when: '2 days ago',
        message:
            'Pellentesque id quam ac tortor pellentesque tempor tristique ut nunc. Pellentesque posuere ut massa eget imperdiet. Ut at nisi magna. Ut volutpat tellus ut est viverra, eu egestas ex tincidunt. Cras tellus tellus, fringilla eget massa in, ultricies maximus eros.',
    },
    {
        from: "D'Artagnan",
        when: 'Week ago',
        message:
            'Aliquam non aliquet mi. Proin feugiat nisl maximus arcu imperdiet euismod nec at purus. Vestibulum sed dui eget mauris consequat dignissim.',
    },
    {
        from: 'Cardinal Richelieu',
        when: '2 weeks ago',
        message:
            'Vestibulum ac nisi non augue viverra ullamcorper quis vitae mi. Donec vitae risus aliquam, posuere urna fermentum, fermentum risus. ',
    },
];
