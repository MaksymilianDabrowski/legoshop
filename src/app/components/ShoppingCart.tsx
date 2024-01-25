"use client";
import { useShoppingCart } from "use-shopping-cart"
import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

const ShoppingCart = () => {
    const { cartCount, shouldDisplayCart, handleCartClick, cartDetails, removeItem, totalPrice, redirectToCheckout } = useShoppingCart()

    async function handleCheckout(event: any) {
        event.preventDefault();
        try {
            const result = await redirectToCheckout();
            if (result?.error) {
                console.log("result");
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
            <SheetContent className="w-[90vw]">
                <SheetHeader>
                    <SheetTitle>Koszyk</SheetTitle>
                </SheetHeader>

                <div className="h-full flex flex-col justify-between">
                    <div className="mt-8 flex-1 overflow-y-auto">
                        <ul className="my-6 divide-y divide-gray-200">
                            {cartCount === 0 ? (
                                <h1 className="py-6">Koszyk jest pusty</h1>
                            )
                                :
                                (
                                    <>
                                        {Object.values(cartDetails ?? {}).map((entry) => (
                                            <li key={entry.id} className="flex py-6 overflow-hidden">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <Image
                                                        src={entry.image as string}
                                                        alt="Product Image"
                                                        width={100}
                                                        height={100}
                                                    />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>
                                                                {entry.name}
                                                            </h3>
                                                            <p className="ml-6">
                                                                {entry.price} zł.
                                                            </p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                                                            {entry.description}
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <p className="text-gray-500">
                                                            Ilość: {entry.quantity}
                                                        </p>

                                                        <div className="flex">
                                                            <button type="button"
                                                                className="font-medium text-primary hover:text-red-500"
                                                                onClick={() => removeItem(entry.id)}
                                                            >
                                                                Usuń
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </>
                                )}
                        </ul>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Łącznie:</p>
                            <p>{totalPrice} zł.</p> {/* zaokrąglenie ceny - przpyadek w którym nie ma nic w koszyku */}
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                            Plus cena wysyłki
                        </p>

                        <div className="mt-6">
                            <Button className="w-full" onClick={handleCheckout}>
                                Idź do koszyka
                            </Button>
                        </div>

                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                Lub <button onClick={() => handleCartClick()} className="font-medium text-primary hover:text-red-500">kontynuuj zakupy</button>
                            </p>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default ShoppingCart