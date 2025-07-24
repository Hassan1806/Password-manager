import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const checkAuth = () => {
 const token = localStorage.getItem('token');
 return token ? true : false;
};

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: '', username: '', password: '' });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem('passwords');
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const emptyField = () => {
    if (form.site.trim() === '' || form.username.trim() === '' || form.password.trim() === '') {
      alert('Please Fill All Fields');
      return false;
    } else {
      return true;
    }
  };

  const savePassword = () => {
    if (!emptyField()) return;

    const newEntry = {
      id: Date.now(),
      site: form.site.trim(),
      username: form.username.trim(),
      password: form.password.trim(),
    };

    setpasswordArray([...passwordArray, newEntry]);
    localStorage.setItem('passwords', JSON.stringify([...passwordArray, newEntry]));
    console.log(...passwordArray, newEntry);
    setform({ site: '', username: '', password: '' });

    toast('Password Saved ✔ !', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
     
      });
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const ShowPassword = () => {
    const passwordd = document.getElementById('passwd');
    if (passwordd.type === 'password') {
      passwordd.type = 'text';
    } else {
      passwordd.type = 'password';
    }
    if (ref.current.src.includes('/icons/eye-solid.svg')) {
      ref.current.src = '/icons/eye-low-vision-solid.svg';
    } else {
      ref.current.src = '/icons/eye-solid.svg';
    }
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast('Copied To Clipboard 📝!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
  };

  const deleteItem = (id) => {
    let consent = confirm('Are you sure you want to delete this password?');
    if (consent) {
      setpasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem('passwords', JSON.stringify(passwordArray.filter((item) => item.id !== id)));
      toast('Password Deleted Successfully 🗑️!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
    }
  };

  const editItem = (id) => {
    setform(passwordArray.filter((item) => item.id === id)[0]);
    setpasswordArray(passwordArray.filter((item) => item.id !== id));

    toast('Editing The Selected Item ✏️!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <div className="mx-auto p-4 md:p-6 bg-slate-200 rounded-xl max-w-lg md:max-w-2xl lg:max-w-4xl">
        <div className="logo text-3xl md:text-4xl font-bold cursor-pointer text-center mb-4">
          <span className="text-green-600">&lt;</span>
          Pass
          <span className="text-green-600 font-bold cursor-pointer">OP/</span>
          <span>&gt;</span>
        </div>
        <p className="text-green-800 font-medium text-lg text-center mb-6">Your Own Password Manager</p>
        <div className="text-black flex flex-col gap-4 md:gap-6">
          <input
            value={form.site}
            onChange={handleChange}
            type="url"
            required
            name="site"
            id="weburl"
            placeholder="Enter Website URL"
            className="rounded-2xl border-2 font-semibold border-green-700 px-4 py-2 w-full"
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-4">
            <input
              value={form.username}
              onChange={handleChange}
              type="text"
              required
              name="username"
              id="username"
              placeholder="Enter Your Username"
              className="rounded-2xl border-2 font-semibold border-green-700 px-4 py-2 w-full md:w-1/2"
            />
            <div className="relative w-full md:w-1/2">
              <input
                value={form.password}
                onChange={handleChange}
                type="password"
                required
                name="password"
                id="passwd"
                placeholder="Enter Your Password"
                className="rounded-2xl border-2 border-green-700 px-4 font-semibold py-2 w-full"
              />
              <img
                ref={ref}
                className="cursor-pointer absolute right-0 top-0 m-3"
                onClick={ShowPassword}
                width={20}
                src="/icons/eye-solid.svg"
                alt="eye"
              />
            </div>
          </div>
          <button
            type="reset"
            onClick={savePassword}
            className="flex border-2 border-green-700 items-center mx-auto rounded-2xl bg-green-500 font-bold px-6 py-2 w-fit cursor-pointer"
          >
            <lord-icon src="https://cdn.lordicon.com/sqmqtgjh.json" trigger="boomerang" colors="primary:#101828,secondary:#00c950"></lord-icon>
            Add Password
          </button>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-lg md:max-w-2xl lg:max-w-4xl">
        <div className="shadow-md sm:rounded-lg">
          {passwordArray.length === 0 && (
            <p className="text-center bg-slate-200 p-6 text-green-800 font-medium text-lg">No Passwords Saved Yet</p>
          )}
          
          <div className="md:hidden space-y-4">
            {passwordArray.map((password, index) => (
              <div key={index} className="bg-slate-200 p-4 rounded-lg border border-green-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Site:</span>
                  <div className="flex items-center">
                    <a href={password.site} target="_blank" className="truncate max-w-[180px]">
                      {password.site}
                    </a>
                    <lord-icon
                      style={{ width: '20px', height: '20px', marginLeft: '6px' }}
                      src="https://cdn.lordicon.com/iykgtsbt.json"
                      trigger="hover"
                      className="copybutton cursor-pointer"
                      onClick={() => copyText(password.site)}
                    ></lord-icon>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Username:</span>
                  <div className="flex items-center">
                    <span className="truncate max-w-[180px]">{password.username}</span>
                    <lord-icon
                      style={{ width: '20px', height: '20px', marginLeft: '6px' }}
                      src="https://cdn.lordicon.com/iykgtsbt.json"
                      trigger="hover"
                      className="copybutton cursor-pointer"
                      onClick={() => copyText(password.username)}
                    ></lord-icon>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Password:</span>
                  <div className="flex items-center">
                    <span className="truncate max-w-[180px]">{password.password}</span>
                    <lord-icon
                      style={{ width: '20px', height: '20px', marginLeft: '6px' }}
                      src="https://cdn.lordicon.com/iykgtsbt.json"
                      trigger="hover"
                      className="copybutton cursor-pointer"
                      onClick={() => copyText(password.password)}
                    ></lord-icon>
                  </div>
                </div>
                <div className="flex justify-end space-x-4 mt-3">
                  <span onClick={() => deleteItem(password.id)}>
                    <lord-icon
                      style={{ width: '20px', height: '20px' }}
                      src="https://cdn.lordicon.com/skkahier.json"
                      trigger="hover"
                      className="cursor-pointer"
                    ></lord-icon>
                  </span>
                  <span onClick={() => editItem(password.id)}>
                    <lord-icon
                      src="https://cdn.lordicon.com/gwlusjdu.json"
                      trigger="hover"
                      style={{ width: '20px', height: '20px' }}
                      className="cursor-pointer"
                    ></lord-icon>
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          
          <div className="hidden md:block relative overflow-x-auto rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            {passwordArray.length > 0 && (
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-800 bg-slate-200">
                  <tr className="flex">
                    <th scope="col" className="px-2 py-3 md:px-4 w-1/4 flex-shrink-0">
                      SiteURL
                    </th>
                    <th scope="col" className="px-2 py-3 md:px-4 w-1/4 flex-shrink-0">
                      Username
                    </th>
                    <th scope="col" className="px-2 py-3 md:px-4 w-1/4 flex-shrink-0">
                      Password
                    </th>
                    <th scope="col" className="px-2 py-3 md:px-4 w-1/4 flex-shrink-0">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {passwordArray.map((password, index) => (
                    <tr key={index} className="border-b bg-slate-200 border-green-700 text-gray-900 flex">
                      <th
                        scope="row"
                        className="px-2 py-4 md:px-4 font-medium whitespace-nowrap flex flex-row items-center justify-between w-1/4 flex-shrink-0"
                      >
                        <a href={password.site} target="_blank" className="truncate">
                          {password.site}
                        </a>
                        <lord-icon
                          style={{ width: '20px', height: '20px', paddingTop: '0px', paddingLeft: '6px' }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover"
                          className="copybutton cursor-pointer"
                          onClick={() => copyText(password.site)}
                        ></lord-icon>
                      </th>
                      <td className="px-2 py-4 md:px-4 font-medium flex flex-row items-center justify-between truncate w-1/4 flex-shrink-0">
                        <span>{password.username}</span>
                        <lord-icon
                          style={{ width: '20px', height: '20px', paddingTop: '0px', paddingLeft: '6px' }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover"
                          className="copybutton cursor-pointer"
                          onClick={() => copyText(password.username)}
                        ></lord-icon>
                      </td>
                      <td className="px-2 py-4 md:px-4 font-medium flex flex-row items-center justify-between truncate w-1/4 flex-shrink-0">
                        <span>{password.password}</span>
                        <lord-icon
                          style={{ width: '20px', height: '20px', paddingTop: '0px', paddingLeft: '6px' }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover"
                          className="copybutton cursor-pointer"
                          onClick={() => copyText(password.password)}
                        ></lord-icon>
                      </td>
                      <td className="px-2 py-4 md:px-4 font-medium flex justify-around w-1/4 flex-shrink-0">
                        <span className="flex justify-center items-center" onClick={() => deleteItem(password.id)}>
                          <lord-icon
                            style={{ width: '20px', height: '20px' }}
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            className="cursor-pointer"
                          ></lord-icon>
                        </span>
                        <span className="flex justify-center items-center" onClick={() => editItem(password.id)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                            style={{ width: '20px', height: '20px' }}
                            className="cursor-pointer"
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;