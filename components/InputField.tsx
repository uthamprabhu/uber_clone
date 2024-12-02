import { Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { InputFieldProps } from '@/types/type';

const InputField = ({
    label,
    labelStyle,
    icon,
    secureTextEntry = false,
    containerStyle,
    inputStyle,
    iconStyle,
    className,
    ...props
}: InputFieldProps) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className='my-2 w-full'>
                    <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
                        {label}
                    </Text>
                    <View
                        className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full 
                            ${isFocused ? "border-primary-500" : "border-neutral-100"} 
                            ${containerStyle}`}
                        style={{
                            borderWidth: 1, // Explicitly set border width
                        }}
                    >
                        {icon && (
                            <Image
                                source={icon}
                                className={`w-6 h-6 ml-4 ${iconStyle}`}
                            />
                        )}
                        <TextInput
                            className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
                            secureTextEntry={secureTextEntry}
                            onFocus={() => setIsFocused(true)} // Trigger on focus
                            onBlur={() => setIsFocused(false)} // Trigger on blur
                            {...props}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default InputField;
