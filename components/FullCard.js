import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FullCard = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Image
                    source={{
                        uri:
                            "https://restaurant-api.dicoding.dev/images/small/" + props.pictureId,
                    }}
                    style={styles.square}
                />
                <View>
                    <Text style={styles.itemName}>{props.name}</Text>
                    <Text style={styles.itemCity}>{props.city}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 56,
        height: 56,
        borderRadius: 200 / 2,
        marginRight: 15,
    },
    itemName: {
        fontSize: '18'
    },
    itemCity: {
        marginTop: 8,
        color: 'grey'
    },
});

export default FullCard;