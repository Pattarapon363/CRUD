import { useForm } from "@inertiajs/react";

export default function Edit({ product }) {
    const { data, setData, patch, errors } = useForm({
        name: product.name || '',
        description: product.description || '',
        price: product.price || '',
        stock: product.stock || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(`/products/${product.id}`); // Update the product
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-md shadow-md">
                {/* Product Name */}
                <div>
                    <label className="block font-medium">Product Name:</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                </div>

                {/* Description */}
                <div>
                    <label className="block font-medium">Description:</label>
                    <textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
                </div>

                {/* Price */}
                <div>
                    <label className="block font-medium">Price:</label>
                    <input
                        type="number"
                        value={data.price}
                        onChange={(e) => setData('price', e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.price && <span className="text-red-500 text-sm">{errors.price}</span>}
                </div>

                {/* Stock */}
                <div>
                    <label className="block font-medium">Stock:</label>
                    <input
                        type="number"
                        value={data.stock}
                        onChange={(e) => setData('stock', e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.stock && <span className="text-red-500 text-sm">{errors.stock}</span>}
                </div>

                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
                >
                    Update Product
                </button>
            </form>
        </div>
    );
}
