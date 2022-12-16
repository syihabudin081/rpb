/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react';
import './ProductCard.css';

function ProductCard() {
  return (
    <>
      <p className="text-grey-darker text-xs mb-8">Responsive cards (1 / 2 / 3 cols); card footer; css flex properties for equal heights. Unsplash photos.</p>
      <div className="flex flex-wrap -m-3">

        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
            <div className="bg-cover h-48" style="background-image: url(https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900);" />
            <div
              className="p-4 flex-1 flex flex-col"
              style="
    "
            >
              <h3 className="mb-4 text-2xl">My heading</h3>
              <div className="mb-4 text-grey-darker text-sm flex-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              </div>
              <a
                href="#"
                className="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
                style="
    "
              >
                Twitter

              </a>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
            <div className="bg-cover h-48" style="background-image: url(https://images.unsplash.com/photo-1497398276231-94ff5dc90217?w=900);" />
            <div
              className="p-4 flex-1 flex flex-col"
              style="
    "
            >
              <h3 className="mb-4 text-2xl">My much longer heading</h3>
              <div className="mb-4 text-grey-darker text-sm flex-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, tempore sapiente eveniet quibusdam ab ea, quaerat placeat numquam aspernatur, accusamus magnam neque.</p>
              </div>
              <a
                href="#"
                className="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
                style="
    "
              >
                Twitter

              </a>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
            <div className="bg-cover h-48" style="background-image: url(https://images.unsplash.com/photo-1503863937795-62954a3c0f05?w=900);" />
            <div
              className="p-4 flex-1 flex flex-col"
              style="
    "
            >
              <h3 className="mb-4 text-2xl">My heading</h3>
              <div className="mb-4 text-grey-darker text-sm flex-1">
                <p>Shorter text.</p>
              </div>
              <a
                href="#"
                className="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
                style="
    "
              >
                Twitter

              </a>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
            <div className="bg-cover h-48" style="background-image: url(https://images.unsplash.com/photo-1511084901824-1c57f5a16c98?w=900);" />
            <div
              className="p-4 flex-1 flex flex-col"
              style="
    "
            >
              <h3 className="mb-4 text-2xl">My heading</h3>
              <div className="mb-4 text-grey-darker text-sm flex-1">
                <p>Shorter text.</p>
              </div>
              <a
                href="#"
                className="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
                style="
    "
              >
                Twitter

              </a>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
            <div className="bg-cover h-48" style="background-image: url(https://images.unsplash.com/photo-1525935944571-4e99237764c9?w=900);" />
            <div
              className="p-4 flex-1 flex flex-col"
              style="
    "
            >
              <h3 className="mb-4 text-2xl">My heading</h3>
              <div className="mb-4 text-grey-darker text-sm flex-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, tempore sapiente eveniet quibusdam ab ea, quaerat placeat numquam aspernatur, accusamus magnam neque.</p>
              </div>
              <a
                href="#"
                className="border-t border-grey-light pt-2  text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
                style="
    "
              >
                Twitter

              </a>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
            <div className="bg-cover h-48" style="background-image: url(https://images.unsplash.com/photo-1486506574467-c44963fc7876?w=900);" />
            <div
              className="p-4 flex-1 flex flex-col"
              style="
    "
            >
              <h3 className="mb-4 text-2xl">My heading</h3>
              <div className="mb-4 text-grey-darker text-sm flex-1">
                <p>Longer content.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, tempore sapiente eveniet quibusdam ab ea, quaerat placeat numquam aspernatur, accusamus magnam neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, tempore sapiente eveniet quibusdam ab ea, quaerat placeat numquam aspernatur, accusamus magnam neque.</p>
              </div>
              <a
                href="#"
                className="border-t border-grey-light pt-2  text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
                style="
    "
              >
                Twitter

              </a>
            </div>
          </div>
        </div>

      </div>
    </>

  );
}

export default ProductCard;
