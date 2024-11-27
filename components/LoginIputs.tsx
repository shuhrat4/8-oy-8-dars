import { Input } from 'postcss'
import React from 'react'

const LoginIputs = () => {
    return (
        <>
            <input name="email" placeholder="xudoyberdiyevshuhrat5@gmail.com" type="email" className="w-full border border-gray-300 rounded px-3 py-2" />
            <input placeholder="*************" type="password" className="w-full border border-gray-300 rounded px-3 py-2" />
            <p className="text-[#46A358] text-end mt-2">Forgot Password</p>
        </>
    )
}

export default LoginIputs