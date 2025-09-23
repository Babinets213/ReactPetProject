import Header from "@/components/Header";
import TrashIcon from "@/components/icons/cart/TrashIcon";
import Button from "@/components/ui/Button";
import { inter400, inter600, inter700 } from "@/styles/fonts";

export default function Cart() {
  return (
    <>
      <Header />
      <main className="mt-30 sm:px-5 lg:px-10 2xl:px-60">
        <h2
          className={`${inter700.className} mb-11 text-[28px] leading-[120%] text-[#2A354F]`}
        >
          Shopping Cart
        </h2>

        <p
          className={`${inter400.className} mb-2 text-lg leading-[120%] text-[#2A354F]`}
        >
          5 Courses in Cart
        </p>

        {/* LEFT SIDE */}
        <div>
          {/*Courses block*/}
          <div className="mb-[18px]">
            {/* COURSE */}
            <div className="flex items-center justify-between border-b border-b-[#D5E4E9] px-2 py-4">
              <span
                className={`${inter600.className} text-lg leading-[120%] text-[#2A354F]`}
              >
                Assessment Block
              </span>
              <div className="flex items-center gap-9">
                <span
                  className={`${inter400.className} text-base leading-[120%] text-[#2A354F]`}
                >
                  499 CHF
                </span>
                <Button
                  icon={<TrashIcon />}
                  content="icon"
                  btnType="text_btn"
                  size="normal"
                />
              </div>
            </div>

            {/* COURSE */}
            <div className="flex items-center justify-between border-b border-b-[#D5E4E9] px-2 py-4">
              <span
                className={`${inter600.className} text-lg leading-[120%] text-[#2A354F]`}
              >
                Assessment Block
              </span>
              <div className="flex items-center gap-9">
                <span
                  className={`${inter400.className} text-base leading-[120%] text-[#2A354F]`}
                >
                  499 CHF
                </span>
                <Button
                  icon={<TrashIcon />}
                  content="icon"
                  btnType="text_btn"
                  size="normal"
                />
              </div>
            </div>
          </div>

          <Button
            className="ml-auto"
            content="text"
            btnType="outline"
            size="normal"
          >
            Continue Shopping
          </Button>
        </div>

        {/* RIGHT SIDE - SUMMARY */}
        <div></div>
      </main>
    </>
  );
}
