/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: '/subfolder',
    env:{
        API_KEY: 'XYZ-123-ABC'
    },
    async headers(){
        return [
            //single path

            // {source: '/product',headers:[{key: 'app-auth-key', value: '123XYZ'}]}

            //all aplication 

            {source: '/:path*',headers:[{key: 'app-auth-key', value: '123XYZ'}]}
            
        ]
    }
}

module.exports = nextConfig
