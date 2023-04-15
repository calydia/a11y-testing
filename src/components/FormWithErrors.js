import * as React from 'react';
import Button from '../components/Button';

export default function FormWithErrors() {

  return (
    <div className="bg-slate-300 dark:bg-slate-900 w-full py-8">
      <div className="mx-auto max-w-[40em]">
        <h3 className="mt-0">Some basic form controls to test</h3>

        <form className="mt-4">
          <label htmlFor="text" className="block mb-2">Text input</label>
          <input name="text" type="text" className="p-4"></input>

          <fieldset className="block my-4-px p-4-px">
            <legend className="px-2">Choose your favorite</legend>
            <div className="option">
              <input type="radio" id="html" name="fav_language" value="HTML" className="p-4 mr-2" />
              <label htmlFor="html">HTML</label>
            </div>
            <div className="option">
              <input type="radio" id="css" name="fav_language" value="CSS" className="p-4 mr-2" />
              <label htmlFor="css">CSS</label>
            </div>
            <div className="option">
              <input type="radio" id="javascript" name="fav_language" value="JavaScript" className="p-4 mr-2" />
              <label>JavaScript</label>
            </div>
          </fieldset>

          <fieldset className="block my-4-px p-4-px">
            <legend className="px-2">Choose your favorite</legend>
            <div className="option">
              <input type="checkbox" id="a11y" name="fav_language_multi" value="a11y" className="p-4 mr-2" />
              <label htmlFor="a11y" className="">A11Y</label>
            </div>
            <div className="option">
              <input type="checkbox" id="accessibility" name="fav_language_multi" value="accessibility" className="p-4 mr-2" />
              <label htmlFor="accessibility">Accessibility</label>
            </div>
            <div className="option">
              <input type="checkbox" id="web" name="fav_language_multi" value="web" className="p-4 mr-2" />
              <label htmlFor="web">Web accessibility</label>
            </div>
          </fieldset>

          <label className="block mb-2">Choose a color:</label>
          <select name="colors" id="colors">
            <option value="red" className="flex flex-wrap items-center gap-2 m-2">Red</option>
            <option value="blue" className="flex flex-wrap items-center gap-2 m-2">Blue</option>
            <option value="green" className="flex flex-wrap items-center gap-2 m-2">Green</option>
            <option value="yellow" className="flex flex-wrap items-center gap-2 m-2">Yellow</option>
          </select>

          <div className="mt-8">
            <Button />
          </div>
        </form>
      </div>
    </div>
  );
}

