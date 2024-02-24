import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
// components
import NoImages from "@/app/components/NoImages";
import Images from "../../../components/Images";
import EditButton from "../../../components/EditButton";

export const dynamicParams = true;

async function getSingleItem(id) {
  // get single item from the database
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase
    .from("cisco")
    .select("*, rackmounts(rackpn)")
    .eq("id", id)
    .single();
  // get session of the user
  const { data: session } = await supabase.auth.getSession();
  return { data, error, session };
}

export default async function SingleItemShow({ params }) {
  const { data: single, error, session } = await getSingleItem(params.id);

  if (error) {
    console.error(error);
  }

  return (
    <div className="flex flex-1 flex-col items-center pb-8 ">
      <div className="flex justify-center  bg-white w-1/2 p-6 m-6 rounded-md">
        <div className="border-r-2  border-slate-300 pr-4">
          {single.images ? <Images images={single.images} /> : <NoImages />}
        </div>
        <div className="flex flex-col  pl-6">
          {single.ciscopn && (
            <div className="">
              <p className=" font-bold text-xl pb-4 pt-6">{single.ciscopn}</p>
            </div>
          )}
          {single.description && (
            <div className="flex pt-4">
              <h1 className="font-bold">Description: </h1>
              <p className="pl-2">{single.description}</p>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="mt-1 p-6 grid grid-cols-2 gap-10 max-w-[900px] border-4 border-indigo-200">
          {single.devicetype && (
            <div className="flex">
              <h1 className="font-bold">Device Type: </h1>
              <p className="pl-2">{single.devicetype}</p>
            </div>
          )}

          {single.fixedmodular && (
            <div className="flex">
              <h1 className="font-bold">Fixed/Modular: </h1>
              <p className="pl-2">{single.fixedmodular}</p>
            </div>
          )}

          {single.rackmounts.rackpn && (
            <div className="flex">
              <h1 className="font-bold">Rackmount: </h1>
              <Link
                className="text-blue-700 pl-2"
                target="blanks"
                href={`https://www.google.com/search?q=${single.rackmounts.rackpn}`}
              >
                {single.rackmounts.rackpn}
              </Link>
            </div>
          )}

          {single.powers && (
            <div className="flex">
              <h1 className="font-bold">Power: </h1>
              <p className="pl-2">{single.powers}</p>
            </div>
          )}

          {single.p2 && (
            <div className="flex">
              <h1 className="font-bold">Power 2: </h1>
              <p className="pl-2">{single.p2}</p>
            </div>
          )}

          {single.fans && (
            <div className="flex">
              <h1 className="font-bold">Fans: </h1>
              <p className="pl-2">{single.fans}</p>
            </div>
          )}

          {single.accesories && (
            <div className="flex">
              <h1 className="font-bold">Accesories: </h1>
              <p className="pl-2">{single.accesories}</p>
            </div>
          )}

          {single.blanks && (
            <div className="flex ">
              <h1 className="font-bold">Blanks: </h1>
              <p className="pr-2 pl-1">{single.blanks}</p>
              {single.b2 ||
                (single.b3 && (
                  <p>
                    {single.b2}, {single.b3}
                  </p>
                ))}
            </div>
          )}

          {single.console && (
            <div className="flex">
              <h1 className="font-bold">Console: </h1>
              <p className="pl-2">{single.console}</p>
            </div>
          )}

          {single.dims && (
            <div className="flex">
              <h1 className="font-bold">DIMS: </h1>
              <p className="pl-2">{single.dims}</p>
            </div>
          )}

          {single.weight && (
            <div className="flex">
              <h1 className="font-bold">Weight: </h1>
              <p className="justify-end pl-2">{single.weight} LBS</p>
            </div>
          )}
        </div>
      </div>
      <p className="pt-1 flex justify-center text-sm font-sans font-bold">
        ***some part numbers may not be correct ***
      </p>
      {session.session && <EditButton id={single.id} />}
    </div>
  );
}