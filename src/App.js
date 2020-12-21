import './App.scss';
import './select.scss';

import { useState } from 'react';
function App() {
    const [quantity1, setQuantity1] = useState(0);
    const [quantity2, setQuantity2] = useState(0);

    return (
        <>
            <header className="header">
                <nav className="top-header container">
                    <ul>
                        <li>Stores</li>
                        <li>News</li>
                        {/* <li>
                            <div className="select2 animated zoomIn">
                                <label>
                                    <input type="checkbox" name="placeholder" />
                                    <i className="toggle plus"></i>
                                    <i className="toggle minus"></i>
                                    <span className="placeholder">
                                        Choose...
                                    </span>
                                    <div>
                                        <label className="option">
                                            <input type="radio" name="option" />
                                            <span className="title animated fadeIn">
                                                Speedometer
                                            </span>
                                        </label>

                                        <label className="option">
                                            <input type="radio" name="option" />
                                            <span className="title animated fadeIn">
                                                Fire
                                            </span>
                                        </label>
                                    </div>
                                </label>
                            </div>
                        </li> */}
                        <li>
                            <select>
                                <option>CHF</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option>Swizerland, EN</option>
                            </select>
                        </li>
                    </ul>
                </nav>
                <div className="main-header">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-center">
                            <img
                                className="logo"
                                src="/logo/AOS-logo.svg"
                                alt="AOS Ecommerce Logo"
                            />

                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    id="search-bar"
                                    placeholder="Search on name, category, tags etc."
                                />
                                <button type="submit" className="search-button">
                                    <img
                                        src="/icons/svg/search@2x.svg"
                                        alt="Search Logo"
                                    />
                                </button>
                            </div>
                            <div className="header-link-wrapper">
                                <div className="header-link" id="account">
                                    <img
                                        src="/icons/svg/myaccount@2x.svg"
                                        alt="account Logo"
                                    />
                                    <p className="s mb-0">Account</p>
                                </div>
                                <div className="header-link" id="cart">
                                    <img
                                        src="/icons/svg/cart@2x.svg"
                                        alt="cart Logo"
                                    />
                                    <p className="s mb-0">Cart</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-nav">
                    <ul>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Accesories</li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="row">
                    <div className="col-md-7 hero-left py-5 container">
                        <h2>Register</h2>
                        <form>
                            <p>Account details</p>
                            <div className="radio-group">
                                <label className="radio">
                                    Mr.
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="mr"
                                    />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radio ml-5">
                                    Ms.
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="ms"
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Input1">
                                    First name (middle name)
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Input1"
                                    placeholder="First Name *"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Input2">Last name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Input2"
                                    placeholder="Enter your family name"
                                />
                            </div>
                            <p className="mt-5">Login details</p>
                            <div className="form-group">
                                <label htmlFor="Input3">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Input3"
                                    placeholder="myemail@exampel1.com"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Input4">Password*</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Input4"
                                    placeholder="Choose password *"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Input5" className="is-invalid">
                                    Password*
                                </label>
                                <input
                                    type="password"
                                    className="form-control is-invalid"
                                    id="Input5"
                                    placeholder="Repeat password *"
                                />
                                <div className="invalid-feedback">
                                    Please choose a password.
                                </div>
                            </div>
                            <div className="mt-5">
                                <label className="checkbox">
                                    I want to received the monthly AOS
                                    newsletter (unsuscribe possible anytime)
                                    <input type="checkbox" />
                                    <span className="checkbox-mark"></span>
                                </label>
                            </div>
                            <div className="mt-3">
                                <label className="checkbox">
                                    I have read and accepted Terms & Conditions
                                    and the Privacy Policy
                                    <input type="checkbox" />
                                    <span className="checkbox-mark"></span>
                                </label>
                            </div>
                            <button className="btn-aos mt-3">Register</button>
                        </form>
                    </div>
                    <div className="col-md-5 hero-right py-5">
                        <h2>Your benefits</h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <div className="benefits">
                                        <img
                                            src="/icons/svg/icon_deco_delivery_box@2x.svg"
                                            alt="delivery Logo"
                                        />
                                        <p>Track your order delivery</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="benefits">
                                        <img
                                            src="/icons/svg/icon_deco_trusted_shop@2x.svg"
                                            alt="delivery Logo"
                                        />
                                        <p>Fast and secure checkout</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="benefits">
                                        <img
                                            src="/icons/svg/icon_deco_wishlist@2x.svg"
                                            alt="wishlist Logo"
                                        />
                                        <p>Save items from your wishlist</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="benefits">
                                        <img
                                            src="/icons/svg/icon_deco_tracking@2x.svg"
                                            alt="tracking Logo"
                                        />
                                        <p>
                                            Access your complete order history
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="product-section">
                        <h3>Order overview</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Item(s)</th>
                                    <th scope="col">Single price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col" className="text-right">
                                        Total Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className="product-item">
                                        <img
                                            className="product-img"
                                            src="/images/ws05-black_main_1.png"
                                            alt="product"
                                        />
                                        <div>
                                            <p className="s mb-0">
                                                Balboa Persistence Tee
                                            </p>
                                            <small>Athlete T-shirt</small>
                                        </div>
                                    </th>
                                    <td>CHF 29.00</td>
                                    <td>
                                        <div className="number-input">
                                            <input
                                                className="quantity hola"
                                                min="0"
                                                name="quantity"
                                                value={quantity1}
                                                type="number"
                                                onChange={(e) =>
                                                    setQuantity1(e.value)
                                                }
                                            />
                                            <div>
                                                <div
                                                    onClick={() =>
                                                        quantity1 < 10
                                                            ? setQuantity1(
                                                                  quantity1 + 1
                                                              )
                                                            : null
                                                    }
                                                >
                                                    <div className="plus">
                                                        {' '}
                                                    </div>
                                                </div>
                                                <div
                                                    onClick={() =>
                                                        quantity1 > 0
                                                            ? setQuantity1(
                                                                  quantity1 - 1
                                                              )
                                                            : null
                                                    }
                                                >
                                                    <div className="minus">
                                                        {' '}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-right">CHF 29.00</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="product-item">
                                        <img
                                            className="product-img"
                                            src="/images/ws05-black_main_1.png"
                                            alt="product"
                                        />
                                        <div>
                                            <p className="s mb-0">
                                                Balboa Persistence Tee
                                            </p>
                                            <small>Athlete T-shirt</small>
                                        </div>
                                    </th>
                                    <td>CHF 29.00</td>
                                    <td>
                                        <div className="number-input">
                                            <input
                                                className="quantity hola"
                                                min="0"
                                                name="quantity2"
                                                value={quantity2}
                                                type="number"
                                                onChange={(e) =>
                                                    setQuantity2(e.value)
                                                }
                                            />
                                            <div>
                                                <div
                                                    onClick={() =>
                                                        quantity2 < 10
                                                            ? setQuantity2(
                                                                  quantity2 + 1
                                                              )
                                                            : null
                                                    }
                                                >
                                                    <div className="plus">
                                                        {' '}
                                                    </div>
                                                </div>
                                                <div
                                                    onClick={() =>
                                                        quantity2 > 0
                                                            ? setQuantity2(
                                                                  quantity2 - 1
                                                              )
                                                            : null
                                                    }
                                                >
                                                    <div className="minus">
                                                        {' '}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-right">CHF 29.00</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className="w-50 float-right table">
                            <tbody className="table-total">
                                <tr>
                                    <td>Cart Subtotal</td>
                                    <td className="text-right"> CHF 86.15</td>
                                </tr>
                                <tr>
                                    <td>Taxes</td>
                                    <td className="text-right"> CHF 86.15</td>
                                </tr>
                                <tr className="table-border">
                                    <td>
                                        Shipping<br></br>
                                        <small>
                                            Shipping with Schweizer Post
                                        </small>
                                    </td>
                                    <td className="text-right"> CHF 86.15</td>
                                </tr>
                                <tr className="table-border">
                                    <td>Order Total</td>
                                    <td className="text-right"> CHF 94.15</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
    );
}

export default App;
