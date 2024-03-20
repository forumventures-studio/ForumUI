import { useGetNotificationsByUserId } from "@/app/hooks/notificationHook";
import { useNotificationsStore } from "@/app/stores/notificationsStore";
import { Menu, Transition } from "@headlessui/react";
import { Bell01 } from "@untitled-ui/icons-react";
import React, { useState, useEffect, Fragment } from "react";
import { useUserProfileStore } from "@/app/stores/userStore";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const NotificationMenu = () => {
  // Fetch User Data
  const { userProfile } = useUserProfileStore();
  // Fetch Notifications by User Id
  const { data: fetchNotificationsData } = useGetNotificationsByUserId(
    userProfile?.id?.toString() || ""
  );
  const { notificationsData } = useNotificationsStore();

  // Notifications component state
  const [notifications, setNotifications] = useState<
    { id: number; content: string; user_id: number }[]
  >([]);

  useEffect(() => {
    if (fetchNotificationsData) {
      setNotifications(fetchNotificationsData);
    }
  }, [fetchNotificationsData]);

  useEffect(() => {
    const eventSource = new EventSource(
      `http://localhost:3001/notifications/newNotification/${userProfile?.id}`
    );

    eventSource.onmessage = ({ data }) => {
      const newNotification = JSON.parse(data);
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        newNotification,
      ]);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  // Filter notifications for the current user total count
  const userNotifications = notifications.filter(
    (notification) => notification.user_id === userProfile?.id
  );

  return (
    <div className="relative z-50">
      <Menu as="div" className="relative inline-block text-left mt-2 ml-8">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
            <div className="relative inline-block">
              <Bell01 className="h-8 w-8 text-slate-400" />
              {userNotifications.length > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-red-400">
                  {userNotifications.length}
                </span>
              )}
              {userNotifications.length === 0 && (
                <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 rounded-full w-5 h-5 flex items-center justify-center text-xs text-gray-800 bg-gray-300">
                  {userNotifications.length}
                </span>
              )}
            </div>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-5 px-5">
              {/* Notification Menu */}
              {/* TODO: STYLE THE NOTIFICATIONS MENU AND ADD READ AND FILTERING FUCTIONALITY  */}
              {/* Title Row  */}
              <div className="flex flex-row justify-between mb-3">
                <div className="text-lg font-semibold text-black">
                  Notifications
                </div>
                <div className="flex hover:text-gray-600">
                  <button className="text-gray-400 text-sm hover:text-gray-600">
                    Mark all as read
                  </button>
                </div>
              </div>
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center"></div>
              </div>
              <div>
                {userNotifications.map((notification: any, index: number) => (
                  <div key={index}>
                    <Menu.Item key={notification.id}>
                      {({ active }) => (
                        <div>
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {"userId: " +
                              notification.user_id +
                              ", content: " +
                              notification.content}
                          </a>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                ))}
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
