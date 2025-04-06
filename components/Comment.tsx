import { View, Text, Image } from 'react-native'
import React from 'react'
import { Models } from 'react-native-appwrite';

interface Props {
    item: Models.Document;
}

const Comment = ({ item: { user, comment, rating } }: Props) => {
    return (
        <View className='flex flex-col gap-3'>
            <View className='flex flex-row items-center gap-3'>
                <Image source={{ uri: user.avatar }} className='size-10 rounded-full' />
                <View className='flex flex-col'>
                    <Text className='text-base font-rubik-bold text-black-300'>{user.name}</Text>
                    <View className='flex flex-row items-center gap-1'>
                        <Text className='text-xs font-rubik text-black-200'>{rating}</Text>
                        <Text className='text-xs font-rubik text-black-200'>•</Text>
                        <Text className='text-xs font-rubik text-black-200'>2 days ago</Text>
                    </View>
                </View>
            </View>
            <Text className='text-sm font-rubik text-black-200'>{comment}</Text>
        </View>
    )
}

export default Comment 