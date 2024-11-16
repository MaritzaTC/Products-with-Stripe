import Image from 'next/image'
function SuccessPage() {
   return (
      <div className="flex items-center justify-center min-h-screen">
         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mt-10 mb-4">
               ¡El pago fue satisfactorio!</h1>
            <Image
               src="/pngegg.png"
               width={400}
               height={300}
               alt="Imagen de fiesta"
            />
         </div>
      </div>
   )
}
export default SuccessPage




