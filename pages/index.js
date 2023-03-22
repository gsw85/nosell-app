import MetaHeader from "@/components/meta-header";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ArrowDownTrayIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import { useCurrentUser } from "@/store/user";
import { FooterWhiteTransparent } from "@/components/layout/footer";
import { addListing } from "@/hooks/listings";
import { useRouter } from "next/navigation";

export default function Home() {
  const userData = useCurrentUser();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onDrop = (acceptedFiles) => {
    const newFileList = fileList.concat(acceptedFiles);
    const fileNames = newFileList.map((file) => file.name);
    const duplicateName = Array.from(
      new Set(
        fileNames.filter((name, index) => fileNames.indexOf(name) !== index)
      )
    );

    console.log(newFileList);

    if (duplicateName.length > 0) {
      setErrorUpload(`Cannot have same file name: ${duplicateName.join(", ")}`);
    } else {
      setErrorUpload("");
      setFileList(newFileList);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const [payoutCurrency, setPayoutCurrency] = useState("btc");
  const [currencyList, setCurrencyList] = useState("");
  const [fileList, setFileList] = useState([]);
  const [errorUpload, setErrorUpload] = useState("");

  const onSubmit = (data) => {
    addListing(
      userData.walletAddress,
      data.title,
      data.description,
      data.price,
      payoutCurrency,
      data.payoutWallet,
      fileList
    ).then((listingID) => router.push(`sell/${listingID}`));
  };

  return (
    <>
      <MetaHeader />
      <div className="max-w-2xl mx-auto ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-xs text-gray-300 mb-2">Create Listing</h1>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <input
                    {...register("title", { required: true })}
                    type={"text"}
                    className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                    placeholder="Title of this listing"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    {...register("description", { required: true })}
                    rows={5}
                    className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                    placeholder="Description about the file"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description for your file.
                </p>
              </div>

              <div>
                <div
                  {...getRootProps()}
                  className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
                >
                  <input
                    {...register("files")}
                    {...getInputProps()}
                    type="file"
                    multiple
                  />
                  {isDragActive ? (
                    <div className="space-y-1 text-center">
                      <ArrowDownTrayIcon className="mx-auto h-10 w-10 mt-2 mb-4 text-gray-700" />
                      <div className="flex text-sm text-gray-600">
                        <p className="pl-1 font-semibold text-gray-700">
                          Drop some files here
                        </p>
                      </div>
                      <p className="text-xs text-gray-500">up to 200MB</p>
                    </div>
                  ) : (
                    <div className="space-y-1 text-center">
                      <ArrowDownTrayIcon className="mx-auto h-10 w-10 mt-2 mb-4 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <div className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                          Upload a file
                        </div>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">up to 200MB</p>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <ul
                  role="list"
                  className={`divide-y divide-gray-200 rounded-md border border-gray-200 ${
                    fileList.length === 0 && "hidden"
                  }`}
                >
                  {fileList.map((item, index) => (
                    <li
                      key={item.name + index}
                      className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
                    >
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 w-0 flex-1 truncate">
                          {item.name}
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <span
                          onClick={() => {
                            const newFileList = fileList.filter(
                              (_, i) => i !== index
                            );
                            setFileList(newFileList);
                          }}
                          className="font-medium text-red-500 hover:text-red-600 cursor-pointer"
                        >
                          Remove
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid sm:grid-cols-3 grid-cols-1 sm:space-x-5 space-y-5 sm:space-y-0">
                <div className="col-span-1">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Price to download
                  </label>
                  <div className="mt-2 relative">
                    <input
                      {...register("price", { required: true, min: 10 })}
                      type={"number"}
                      defaultValue={10}
                      inputMode={"numeric"}
                      className="pl-10 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                    />
                    <div className="absolute left-2 top-0 bottom-0 h-full flex justify-center items-center text-sm text-gray-400">
                      USD
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Payout Address
                  </label>
                  <div className="mt-2 relative">
                    <input
                      {...register("payoutWallet", { required: true })}
                      type="text"
                      className="pl-12 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                    />
                    <div className="absolute left-2 top-0 bottom-0 h-full flex justify-center items-center text-sm text-gray-400">
                      {payoutCurrency}
                    </div>
                  </div>
                  <div className="text-xs mt-2 text-indigo-300 cursor-pointer hover:text-indigo-600">
                    Change Currency
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between bg-gray-50 px-4 py-3 items-center sm:px-6">
              <span className="text-xs truncate">
                {userData.walletAddress && "Owner: " + userData.walletAddress}
              </span>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Create
              </button>
            </div>
          </div>
          {errorUpload && (
            <div className="text-red-500 text-sm my-2 font-semibold ">
              Error: {errorUpload}
            </div>
          )}
        </form>
        <FooterWhiteTransparent />
      </div>
    </>
  );
}
