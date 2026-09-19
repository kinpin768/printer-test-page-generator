const generateButton = document.getElementById("generate-btn");
const printButton = document.getElementById("print-btn");

const paperSize = document.getElementById("paper-size");
const testType = document.getElementById("test-type");

const testPage = document.getElementById("test-page");


generateButton.addEventListener("click", function () {

    const selectedPaper = paperSize.value;
    const selectedTest = testType.value;

    // Set paper size
    if (selectedPaper === "a4") {

        testPage.style.width = "210mm";
        testPage.style.minHeight = "297mm";

    } else if (selectedPaper === "letter") {

        testPage.style.width = "216mm";
        testPage.style.minHeight = "279mm";

    }


    // Black & White test
    if (selectedTest === "black-white") {

        testPage.innerHTML = `

            <div class="test-page-header">
                <h2>Black & White Printer Test</h2>
                <p>Black ink and print quality test</p>
            </div>

            <div class="test-content">

                <h3>Text Sharpness Test</h3>

                <p>
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>

                <p>
                    abcdefghijklmnopqrstuvwxyz
                </p>

                <p>
                    0123456789
                </p>

                <div class="test-lines">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <h3>Black Density Test</h3>

                <div style="
                    width:100%;
                    height:100px;
                    background:#000;
                    margin:20px 0;
                "></div>

                <h3>Grayscale Test</h3>

                <div class="grayscale">

                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>

                <div class="alignment-test">

                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>

                </div>

            </div>

            <div class="test-page-footer">
                Black & White Printer Test Page
            </div>

        `;

    }


    // Color test
    else if (selectedTest === "color") {

        testPage.innerHTML = `

            <div class="test-page-header">
                <h2>Color Printer Test</h2>
                <p>Color quality and ink test</p>
            </div>

            <div class="test-content">

                <h3>Color Test</h3>

                <div class="color-test">

                    <div class="color-box black"></div>
                    <div class="color-box cyan"></div>
                    <div class="color-box magenta"></div>
                    <div class="color-box yellow"></div>

                </div>

                <h3>Primary Color Test</h3>

                <div style="
                    display:grid;
                    grid-template-columns:repeat(3,1fr);
                    gap:10px;
                    margin:20px 0;
                ">

                    <div style="
                        height:80px;
                        background:red;
                    "></div>

                    <div style="
                        height:80px;
                        background:green;
                    "></div>

                    <div style="
                        height:80px;
                        background:blue;
                    "></div>

                </div>

                <h3>Sample Text</h3>

                <p>
                    Color printer test page
                </p>

                <p>
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>

                <p>
                    0123456789
                </p>

                <div class="alignment-test">

                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>

                </div>

            </div>

            <div class="test-page-footer">
                Color Printer Test Page
            </div>

        `;

    }


    // CMYK test
    else if (selectedTest === "cmyk") {
        // Grayscale test
else if (selectedTest === "grayscale") {

    testPage.innerHTML = `

        <div class="test-page-header">
            <h2>Grayscale Printer Test</h2>
            <p>Black to white gradient and grayscale quality test</p>
        </div>

        <div class="test-content">

            <h3>Grayscale Levels</h3>

            <div class="grayscale">

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </div>

            <h3>Black Density Test</h3>

            <div style="
                width:100%;
                height:80px;
                background:#000;
                margin:20px 0;
            "></div>

            <h3>Sample Text</h3>

            <p>
                Grayscale printer test page
            </p>

            <p>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </p>

            <p>
                abcdefghijklmnopqrstuvwxyz
            </p>

            <p>
                0123456789
            </p>

            <h3>Fine Lines</h3>

            <div class="test-lines">

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </div>

            <div class="alignment-test">

                <span>+</span>
                <span>+</span>
                <span>+</span>
                <span>+</span>
                <span>+</span>

            </div>

        </div>

        <div class="test-page-footer">
            Grayscale Printer Test Page
        </div>

    `;

}

        testPage.innerHTML = `

            <div class="test-page-header">
                <h2>CMYK Printer Test</h2>
                <p>Cyan, Magenta, Yellow and Black test</p>
            </div>

            <div class="test-content">

                <h3>CMYK Color Channels</h3>

                <div style="
                    display:grid;
                    grid-template-columns:repeat(2,1fr);
                    gap:15px;
                    margin:20px 0;
                ">

                    <div style="
                        height:120px;
                        background:#00ffff;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-weight:bold;
                    ">
                        CYAN
                    </div>

                    <div style="
                        height:120px;
                        background:#ff00ff;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-weight:bold;
                    ">
                        MAGENTA
                    </div>

                    <div style="
                        height:120px;
                        background:#ffff00;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-weight:bold;
                    ">
                        YELLOW
                    </div>

                    <div style="
                        height:120px;
                        background:#000;
                        color:#fff;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-weight:bold;
                    ">
                        BLACK
                    </div>

                </div>

                <h3>Grayscale</h3>

                <div class="grayscale">

                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>

                <h3>Text Test</h3>

                <p>
                    CMYK printer calibration and color test
                </p>

                <div class="alignment-test">

                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>

                </div>

            </div>

            <div class="test-page-footer">
                CMYK Printer Test Page
            </div>

        `;

    }

});


printButton.addEventListener("click", function () {

    window.print();

});
