import Image from "next/image";

const Activity = () => {
  return (
    <div className="py-8">
      <div className="max-w-sm bg-white shadow rounded p-6">
        <div className="flex justify-between">
          <p className="text-xl font-semibold text-gray-800">Team Activity</p>
          <p className="text-sm cursor-pointer underline text-right text-indigo-700">
            View all
          </p>
        </div>
        <div className="mt-6 flex">
          <div className="w-10 flex flex-col items-center">
            <Image
              className="h-10 rounded-full"
              src="https://cdn.tuk.dev/assets/components/misc/activity-1.png"
            />
            <div className="pt-4">
              <svg
                width={1}
                height={40}
                viewBox="0 0 1 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499998"
                  y2={47}
                  stroke="#D1D5DB"
                  strokeDasharray="2 2"
                />
              </svg>
            </div>
          </div>
          <div className="pl-3">
            <p className="text-sm font-semibold leading-normal text-gray-800">
              John Stark
            </p>
            <p className="text-xs leading-3 text-gray-500 pt-1">2 hours ago</p>
            <p className="pt-4 text-sm leading-4 text-gray-600">
              Signed in to Job Site{" "}
              <span className="text-indigo-700">#6787 Hasting St</span>, created
              one report
            </p>
          </div>
        </div>
        <div className="mt-6 flex">
          <div className="w-10 flex flex-col items-center">
            <Image
              className="h-10 rounded-full"
              src="https://cdn.tuk.dev/assets/components/misc/profile-img-1.png"
            />
            <div className="pt-4">
              <svg
                width={1}
                height={40}
                viewBox="0 0 1 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499998"
                  y2={47}
                  stroke="#D1D5DB"
                  strokeDasharray="2 2"
                />
              </svg>
            </div>
          </div>
          <div className="pl-3">
            <p className="text-sm font-semibold leading-normal text-gray-800">
              Rachel Green
            </p>
            <p className="text-xs leading-3 text-gray-500 pt-1">5 hours ago</p>
            <p className="pt-4 text-sm leading-4 text-gray-600">
              Reviewed and sent to{" "}
              <span className="text-indigo-700">jill@astro.com </span>
              <br />
              &amp; <span className="text-indigo-700">jason@ipsum.com</span>
            </p>
          </div>
        </div>
        <div className="mt-6 flex">
          <div className="w-10 flex flex-col items-center">
            <Image
              className="h-10 rounded-full"
              src="https://cdn.tuk.dev/assets/components/misc/activity-2.png"
            />
            <div className="pt-4">
              <svg
                width={1}
                height={40}
                viewBox="0 0 1 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499998"
                  y2={47}
                  stroke="#D1D5DB"
                  strokeDasharray="2 2"
                />
              </svg>
            </div>
          </div>
          <div className="pl-3">
            <p className="text-sm font-semibold leading-normal text-gray-800">
              Rachel Green
            </p>
            <p className="text-xs leading-3 text-gray-500 pt-1">8 hours ago</p>
            <p className="pt-4 text-sm leading-4 text-gray-600">
              Ticket number <span className="text-indigo-700">#18293</span> has
              been
              <br />
              resolved.Thank you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Activity;
