import React from "react";
import styled, { keyframes } from "styled-components";
import { usePortico } from "../contexts/PorticoCtx";

const Wrapper = styled.div`
  position: relative;
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1) translateX(-50%);
    opacity: 1;
  }
  100% {
    transform: scale(1.8) translateX(-50%);
    opacity: 0;
  }
`;

const Pulse = styled.div`
  position: absolute;
  left: 53.5%;
  top: 18%;
  width: 18.909%;
  height: 7%;
  border-radius: 4% 4% 4% 4%/17% 17% 17% 17%;
  border: 1px solid #8cf900;
  background: transparent;
  transform-origin: left center;
  animation: ${pulseAnimation} 1.5s ease infinite;

  // @media (max-width: 1800px) {
  //   border-radius: 7px;
  // }
  // @media (max-width: 1700px) {
  //   border-radius: 6px;
  // }
  // @media (max-width: 1600px) {
  //   border-radius: 5px;
  // }
  // @media (max-width: 1500px) {
  //   border-radius: 4px;
  // }
  // @media (max-width: 1400px) {
  //   border-radius: 3px;
  // }
`;

const DecShaSeqLay = () => {
  const { globalLabels } = usePortico();

  return (
    <Wrapper>
      <Pulse />
      <svg viewBox='0 0 1100 610' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='431' y='119.5' width='315' height='391' rx='11.5' stroke='#222222' />
        <rect x='419' y='107.5' width='339' height='415' rx='15.5' stroke='#222222' strokeOpacity='0.8' />
        <rect x='407' y='95.5' width='363' height='439' rx='15.5' stroke='#222222' strokeOpacity='0.6' />
        <rect x='395' y='83.5' width='387' height='463' rx='15.5' stroke='#222222' strokeOpacity='0.4' />
        <rect x='383' y='71.5' width='411' height='487' rx='15.5' stroke='#222222' strokeOpacity='0.2' />
        <rect x='74' y='240.5' width='113' height='130' rx='16.5' stroke='white' strokeOpacity='0.06' />
        <rect x='79.5' y='246' width='102' height='119' rx='12' fill='#090A0F' />
        <rect x='79' y='245.5' width='103' height='120' rx='12.5' stroke='white' strokeOpacity='0.2' />
        <rect x='83.5' y='250' width='94' height='111' rx='8' fill='#090A0F' />
        <rect x='84' y='250.5' width='93' height='110' rx='7.5' stroke='white' strokeOpacity='0.4' />
        <rect x='102' y='264.5' width='57' height='57' rx='28.5' stroke='white' strokeOpacity='0.4' />
        <path
          d='M125.402 289.176C127.936 289.176 129.99 287.122 129.99 284.588C129.99 282.054 127.936 280 125.402 280C122.868 280 120.814 282.054 120.814 284.588C120.814 287.122 122.868 289.176 125.402 289.176Z'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M133.64 304.607C135.347 304.014 136.222 302.044 135.406 300.431C133.559 296.779 129.776 294.272 125.402 294.272C121.028 294.272 117.245 296.777 115.398 300.431C114.582 302.044 115.455 304.014 117.164 304.607C119.266 305.337 122.074 306 125.402 306C128.73 306 131.538 305.337 133.64 304.607Z'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M139.773 305.648C141.318 305.387 142.685 305.006 143.837 304.606C145.544 304.013 146.418 302.043 145.603 300.43C144.012 297.286 140.988 294.992 137.385 294.415'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M134.034 288.891C134.523 289.068 135.047 289.176 135.598 289.176C138.132 289.176 140.186 287.123 140.186 284.588C140.186 282.053 138.132 280 135.598 280C135.047 280 134.523 280.106 134.034 280.285'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <text
          fill='white'
          xmlSpace='preserve'
          style={{ whiteSpace: "pre" }}
          fontFamily='area-normal'
          fontSize='16'
          letterSpacing='0em'
        >
          <tspan x='112' y='343.412'>
            User
          </tspan>
        </text>
        <g filter='url(#filter0_d_324_1772)'>
          <rect x='442.5' y='132' width='292' height='366' rx='8' fill='#181818' shapeRendering='crispEdges' />
          <rect x='443' y='132.5' width='291' height='365' rx='7.5' stroke='#8CF900' shapeRendering='crispEdges' />
          <rect x='455' y='188.5' width='267' height='115' rx='7.5' fill='#090A0F' />
          <rect x='455' y='188.5' width='267' height='115' rx='7.5' stroke='white' />
          <rect x='463' y='212.5' width='251' height='83' rx='3.5' stroke='white' strokeOpacity='0.16' />
          <path
            d='M580.596 271.296H580.1C579.69 271.296 579.356 271.629 579.356 272.04V272.536C579.356 272.947 579.69 273.28 580.1 273.28H580.596C581.007 273.28 581.34 272.947 581.34 272.536V272.04C581.34 271.629 581.007 271.296 580.596 271.296Z'
            fill='#FBFF42'
          />
          <path
            d='M571.668 271.296H571.172C570.761 271.296 570.428 271.629 570.428 272.04V272.536C570.428 272.947 570.761 273.28 571.172 273.28H571.668C572.079 273.28 572.412 272.947 572.412 272.536V272.04C572.412 271.629 572.079 271.296 571.668 271.296Z'
            fill='#FBFF42'
          />
          <path
            d='M589.524 271.296H589.028C588.618 271.296 588.284 271.629 588.284 272.04V272.536C588.284 272.947 588.618 273.28 589.028 273.28H589.524C589.935 273.28 590.268 272.947 590.268 272.536V272.04C590.268 271.629 589.935 271.296 589.524 271.296Z'
            fill='#FBFF42'
          />
          <path
            d='M598.453 271.296H597.957C597.546 271.296 597.213 271.629 597.213 272.04V272.536C597.213 272.947 597.546 273.28 597.957 273.28H598.453C598.864 273.28 599.197 272.947 599.197 272.536V272.04C599.197 271.629 598.864 271.296 598.453 271.296Z'
            fill='#FBFF42'
          />
          <path
            d='M585.426 267.824H584.93C584.519 267.824 584.186 268.157 584.186 268.568V269.064C584.186 269.475 584.519 269.808 584.93 269.808H585.426C585.837 269.808 586.17 269.475 586.17 269.064V268.568C586.17 268.157 585.837 267.824 585.426 267.824Z'
            fill='#FBFF42'
          />
          <path
            d='M576.498 267.824H576.002C575.591 267.824 575.258 268.157 575.258 268.568V269.064C575.258 269.475 575.591 269.808 576.002 269.808H576.498C576.909 269.808 577.242 269.475 577.242 269.064V268.568C577.242 268.157 576.909 267.824 576.498 267.824Z'
            fill='#FBFF42'
          />
          <path
            d='M594.354 267.824H593.858C593.447 267.824 593.114 268.157 593.114 268.568V269.064C593.114 269.475 593.447 269.808 593.858 269.808H594.354C594.765 269.808 595.098 269.475 595.098 269.064V268.568C595.098 268.157 594.765 267.824 594.354 267.824Z'
            fill='#FBFF42'
          />
          <path
            d='M603.282 267.824H602.786C602.376 267.824 602.042 268.157 602.042 268.568V269.064C602.042 269.475 602.376 269.808 602.786 269.808H603.282C603.693 269.808 604.027 269.475 604.027 269.064V268.568C604.027 268.157 603.693 267.824 603.282 267.824Z'
            fill='#FBFF42'
          />
          <path
            d='M607.381 271.296H606.885C606.474 271.296 606.141 271.629 606.141 272.04V272.536C606.141 272.947 606.474 273.28 606.885 273.28H607.381C607.792 273.28 608.125 272.947 608.125 272.536V272.04C608.125 271.629 607.792 271.296 607.381 271.296Z'
            fill='#FBFF42'
          />
          <path
            d='M609.914 253.505H567.086C564.001 253.505 561.5 255.561 561.5 258.098V275.263C561.5 277.8 564.001 279.857 567.086 279.857H609.914C612.999 279.857 615.5 277.8 615.5 275.263V258.098C615.5 255.561 612.999 253.505 609.914 253.505Z'
            stroke='#FBFF42'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M561.707 256.912L569.951 233.069C570.969 230.127 573.827 228.143 577.051 228.143H599.93C603.151 228.143 606.013 230.127 607.031 233.069L615.275 256.912'
            stroke='#FBFF42'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M570.81 261.159H581.052'
            stroke='#FBFF42'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <text
            fill='white'
            xmlSpace='preserve'
            style={{ whiteSpace: "pre" }}
            fontFamily='area-normal'
            fontSize='12'
            letterSpacing='0em'
          >
            <tspan x='578' y='245.684'>
              {globalLabels.l}
            </tspan>
          </text>
          <rect x='553' y='173' width='70' height='28' rx='4' fill='#090A0F' />
          <rect x='553.5' y='173.5' width='69' height='27' rx='3.5' stroke='white' strokeOpacity='0.6' />
          <text
            fill='white'
            xmlSpace='preserve'
            style={{ whiteSpace: "pre" }}
            fontFamily='area-normal'
            fontSize='12'
            letterSpacing='0em'
          >
            <tspan x='567' y='192.184'>
              Leader
            </tspan>
          </text>
          <rect x='454.5' y='334' width='268' height='152' rx='8' fill='#090A0F' />
          <rect x='455' y='334.5' width='267' height='151' rx='7.5' stroke='white' strokeOpacity='0.6' />
          <rect x='463' y='358.5' width='123' height='57' rx='3.5' stroke='white' strokeOpacity='0.16' />
          <path
            d='M543.431 391.696H505.569C502.841 391.696 500.63 393.483 500.63 395.687V401.009C500.63 403.213 502.841 405 505.569 405H543.431C546.158 405 548.37 403.213 548.37 401.009V395.687C548.37 393.483 546.158 391.696 543.431 391.696Z'
            stroke='#77FFFF'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M500.63 394.826L507.978 373.422C508.885 370.781 511.432 369 514.305 369H534.695C537.565 369 540.115 370.781 541.022 373.422L548.37 394.826'
            stroke='#77FFFF'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M508.457 397.957H517.848'
            stroke='#77FFFF'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <text
            fill='white'
            xmlSpace='preserve'
            style={{ whiteSpace: "pre" }}
            fontFamily='area-normal'
            fontSize='12'
            letterSpacing='0em'
          >
            <tspan x='513.5' y='385.184'>
              {globalLabels.f0}
            </tspan>
          </text>
          <rect x='591' y='358.5' width='123' height='57' rx='3.5' stroke='white' strokeOpacity='0.16' />
          <path
            d='M671.431 391.696H633.569C630.841 391.696 628.63 393.483 628.63 395.687V401.009C628.63 403.213 630.841 405 633.569 405H671.431C674.158 405 676.37 403.213 676.37 401.009V395.687C676.37 393.483 674.158 391.696 671.431 391.696Z'
            stroke='#77FFFF'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M628.63 394.826L635.978 373.422C636.885 370.781 639.432 369 642.305 369H662.695C665.565 369 668.115 370.781 669.022 373.422L676.37 394.826'
            stroke='#77FFFF'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M636.457 397.957H645.848'
            stroke='#77FFFF'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <text
            fill='white'
            xmlSpace='preserve'
            style={{ whiteSpace: "pre" }}
            fontFamily='area-normal'
            fontSize='12'
            letterSpacing='0em'
          >
            <tspan x='641.5' y='385.184'>
              {globalLabels.f1}
            </tspan>
          </text>
          <rect x='463' y='420.5' width='123' height='57' rx='3.5' stroke='white' strokeOpacity='0.16' />
          <path
            d='M543.431 453.696H505.569C502.841 453.696 500.63 455.483 500.63 457.687V463.009C500.63 465.213 502.841 467 505.569 467H543.431C546.158 467 548.37 465.213 548.37 463.009V457.687C548.37 455.483 546.158 453.696 543.431 453.696Z'
            stroke='#77FFFF'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M500.63 456.826L507.978 435.422C508.885 432.781 511.432 431 514.305 431H534.695C537.565 431 540.115 432.781 541.022 435.422L548.37 456.826'
            stroke='#77FFFF'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M508.457 459.957H517.848'
            stroke='#77FFFF'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <text
            fill='white'
            xmlSpace='preserve'
            style={{ whiteSpace: "pre" }}
            fontFamily='area-normal'
            fontSize='12'
            letterSpacing='0em'
          >
            <tspan x='513.5' y='447.184'>
              {globalLabels.f2}
            </tspan>
          </text>
          <rect x='591' y='420.5' width='123' height='57' rx='3.5' stroke='white' strokeOpacity='0.16' />
          <path
            d='M671.431 453.696H633.569C630.841 453.696 628.63 455.483 628.63 457.687V463.009C628.63 465.213 630.841 467 633.569 467H671.431C674.158 467 676.37 465.213 676.37 463.009V457.687C676.37 455.483 674.158 453.696 671.431 453.696Z'
            stroke='#77FFFF'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M628.63 456.826L635.978 435.422C636.885 432.781 639.432 431 642.305 431H662.695C665.565 431 668.115 432.781 669.022 435.422L676.37 456.826'
            stroke='#77FFFF'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M636.457 459.957H645.848'
            stroke='#77FFFF'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <text
            fill='white'
            xmlSpace='preserve'
            style={{ whiteSpace: "pre" }}
            fontFamily='area-normal'
            fontSize='12'
            letterSpacing='0em'
          >
            <tspan x='641.5' y='447.184'>
              {globalLabels.f3}
            </tspan>
          </text>
          <rect x='551.5' y='320' width='73' height='28' rx='4' fill='#090A0F' />
          <rect x='552' y='320.5' width='72' height='27' rx='3.5' stroke='white' strokeOpacity='0.6' />
          <text
            fill='white'
            xmlSpace='preserve'
            style={{ whiteSpace: "pre" }}
            fontFamily='area-normal'
            fontSize='12'
            letterSpacing='0em'
          >
            <tspan x='565.5' y='339.184'>
              Follower
            </tspan>
          </text>
          <rect x='485' y='112.5' width='207' height='41' rx='5.5' fill='#181818' />
          <rect x='485' y='112.5' width='207' height='41' rx='5.5' stroke='#8CF900' />
          <g clipPath='url(#clip0_324_1772)'>
            <path
              d='M510.5 140.25C514.504 140.25 517.75 137.004 517.75 133C517.75 128.996 514.504 125.75 510.5 125.75C506.496 125.75 503.25 128.996 503.25 133C503.25 137.004 506.496 140.25 510.5 140.25Z'
              stroke='#6A6A6A'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path d='M513.964 135L507.036 131' stroke='#8CF900' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M510.5 137V129' stroke='#8CF900' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M507.036 135L513.964 131' stroke='#8CF900' strokeLinecap='round' strokeLinejoin='round' />
          </g>
          <text
            fill='white'
            xmlSpace='preserve'
            style={{ whiteSpace: "pre" }}
            fontFamily='area-normal'
            fontSize='16'
            letterSpacing='0em'
          >
            <tspan x='525.5' y='139.912'>
              Shared Sequencer
            </tspan>
          </text>
          <rect x='485' y='112.5' width='207' height='41' rx='5.5' fill='#181818' />
          <rect x='485' y='112.5' width='207' height='41' rx='5.5' stroke='#8CF900' />
          <g clipPath='url(#clip1_324_1772)'>
            <path
              d='M510.5 140.25C514.504 140.25 517.75 137.004 517.75 133C517.75 128.996 514.504 125.75 510.5 125.75C506.496 125.75 503.25 128.996 503.25 133C503.25 137.004 506.496 140.25 510.5 140.25Z'
              stroke='#6A6A6A'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path d='M513.964 135L507.036 131' stroke='#8CF900' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M510.5 137V129' stroke='#8CF900' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M507.036 135L513.964 131' stroke='#8CF900' strokeLinecap='round' strokeLinejoin='round' />
          </g>
          <text
            fill='white'
            xmlSpace='preserve'
            style={{ whiteSpace: "pre" }}
            fontFamily='area-normal'
            fontSize='16'
            letterSpacing='0em'
          >
            <tspan x='525.5' y='139.912'>
              Shared Sequencer
            </tspan>
          </text>
        </g>
        <path
          d='M427.854 279.354C428.049 279.158 428.049 278.842 427.854 278.646L424.672 275.464C424.476 275.269 424.16 275.269 423.964 275.464C423.769 275.66 423.769 275.976 423.964 276.172L426.793 279L423.964 281.828C423.769 282.024 423.769 282.34 423.964 282.536C424.16 282.731 424.476 282.731 424.672 282.536L427.854 279.354ZM177.5 279.5H427.5V278.5H177.5V279.5Z'
          fill='white'
        />
        <path
          d='M186.146 330.646C185.951 330.842 185.951 331.158 186.146 331.354L189.328 334.536C189.524 334.731 189.84 334.731 190.036 334.536C190.231 334.34 190.231 334.024 190.036 333.828L187.207 331L190.036 328.172C190.231 327.976 190.231 327.66 190.036 327.464C189.84 327.269 189.524 327.269 189.328 327.464L186.146 330.646ZM186.5 331.5L442.5 331.5L442.5 330.5L186.5 330.5L186.5 331.5Z'
          fill='white'
        />
        <g filter='url(#filter1_d_324_1772)'>
          <rect x='239.5' y='260' width='138' height='38' rx='4' fill='#090A0F' shapeRendering='crispEdges' />
          <rect x='240' y='260.5' width='137' height='37' rx='3.5' stroke='white' shapeRendering='crispEdges' />
          <text
            fill='white'
            xmlSpace='preserve'
            style={{ whiteSpace: "pre" }}
            fontFamily='area-normal'
            fontSize='12'
            fontWeight='bold'
            letterSpacing='0em'
          >
            <tspan x='253.5' y='284.184'>
              ENCRYPTED TX
            </tspan>
          </text>
          <path
            d='M360.167 275.223L363.944 279L360.167 282.778'
            stroke='#FF5656'
            strokeOpacity='0.4'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M355.944 275.223L359.722 279L355.944 282.778'
            stroke='#FF5757'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <g filter='url(#filter2_d_324_1772)'>
          <rect x='216.5' y='312' width='184' height='38' rx='4' fill='#090A0F' shapeRendering='crispEdges' />
          <rect x='217' y='312.5' width='183' height='37' rx='3.5' stroke='white' shapeRendering='crispEdges' />
          <path
            d='M233.833 327.223L230.056 331L233.833 334.778'
            stroke='#24F6B7'
            strokeOpacity='0.4'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M238.056 327.223L234.278 331L238.056 334.778'
            stroke='#24F6B7'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <text
            fill='white'
            xmlSpace='preserve'
            style={{ whiteSpace: "pre" }}
            fontFamily='area-normal'
            fontSize='12'
            fontWeight='bold'
            letterSpacing='0em'
          >
            <tspan x='244.5' y='336.184'>
              ORDER COMMITMENT
            </tspan>
          </text>
        </g>
        <path
          d='M922.854 233.354C923.049 233.158 923.049 232.842 922.854 232.646L919.672 229.464C919.476 229.269 919.16 229.269 918.964 229.464C918.769 229.66 918.769 229.976 918.964 230.172L921.793 233L918.964 235.828C918.769 236.024 918.769 236.34 918.964 236.536C919.16 236.731 919.476 236.731 919.672 236.536L922.854 233.354ZM734.5 305.5H884.005V304.5H734.5V305.5ZM909.505 280V246.495H908.505V280H909.505ZM909.505 246.495C909.505 239.318 915.323 233.5 922.5 233.5V232.5C914.771 232.5 908.505 238.766 908.505 246.495H909.505ZM884.005 305.5C898.088 305.5 909.505 294.083 909.505 280H908.505C908.505 293.531 897.536 304.5 884.005 304.5V305.5Z'
          fill='white'
        />
        <path
          d='M922.854 376.646C923.049 376.842 923.049 377.158 922.854 377.354L919.672 380.536C919.476 380.731 919.16 380.731 918.964 380.536C918.769 380.34 918.769 380.024 918.964 379.828L921.793 377L918.964 374.172C918.769 373.976 918.769 373.66 918.964 373.464C919.16 373.269 919.476 373.269 919.672 373.464L922.854 376.646ZM734.5 304.5H884.005V305.5H734.5V304.5ZM909.505 330V363.505H908.505V330H909.505ZM909.505 363.505C909.505 370.682 915.323 376.5 922.5 376.5V377.5C914.771 377.5 908.505 371.234 908.505 363.505H909.505ZM884.005 304.5C898.088 304.5 909.505 315.917 909.505 330H908.505C908.505 316.469 897.536 305.5 884.005 305.5V304.5Z'
          fill='white'
        />
        <g filter='url(#filter3_d_324_1772)'>
          <rect x='777.5' y='286' width='87' height='38' rx='4' fill='#090A0F' shapeRendering='crispEdges' />
          <rect x='778' y='286.5' width='86' height='37' rx='3.5' stroke='white' shapeRendering='crispEdges' />
          <text
            fill='white'
            xmlSpace='preserve'
            style={{ whiteSpace: "pre" }}
            fontFamily='area-normal'
            fontSize='12'
            fontWeight='bold'
            letterSpacing='0em'
          >
            <tspan x='791.5' y='310.184'>
              BLOCK
            </tspan>
          </text>
          <path
            d='M847.167 301.223L850.944 305L847.167 308.778'
            stroke='#189EFF'
            strokeOpacity='0.4'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M842.944 301.223L846.722 305L842.944 308.778'
            stroke='#189EFF'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <rect x='930' y='197.5' width='91' height='67' rx='7.5' stroke='white' strokeOpacity='0.4' />
        <text
          fill='white'
          fillOpacity='0.6'
          xmlSpace='preserve'
          style={{ whiteSpace: "pre" }}
          fontFamily='area-normal'
          fontSize='14'
          letterSpacing='0em'
        >
          <tspan x='953.5' y='224.548'>
            Rollup
          </tspan>
        </text>
        <text
          fill='white'
          xmlSpace='preserve'
          style={{ whiteSpace: "pre" }}
          fontFamily='area-normal'
          fontSize='16'
          letterSpacing='0em'
        >
          <tspan x='969' y='249.412'>
            A
          </tspan>
        </text>
        <rect x='930' y='343.5' width='91' height='67' rx='7.5' stroke='white' strokeOpacity='0.4' />
        <text
          fill='white'
          fillOpacity='0.6'
          xmlSpace='preserve'
          style={{ whiteSpace: "pre" }}
          fontFamily='area-normal'
          fontSize='14'
          letterSpacing='0em'
        >
          <tspan x='953.5' y='370.548'>
            Rollup
          </tspan>
        </text>
        <text
          fill='white'
          xmlSpace='preserve'
          style={{ whiteSpace: "pre" }}
          fontFamily='area-normal'
          fontSize='16'
          letterSpacing='0em'
        >
          <tspan x='969.5' y='395.412'>
            B
          </tspan>
        </text>
        <defs>
          <filter
            id='filter0_d_324_1772'
            x='330.5'
            y='0'
            width='516'
            height='610'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset />
            <feGaussianBlur stdDeviation='56' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix type='matrix' values='0 0 0 0 0.54902 0 0 0 0 0.976471 0 0 0 0 0 0 0 0 0.12 0' />
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_324_1772' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_324_1772' result='shape' />
          </filter>
          <filter
            id='filter1_d_324_1772'
            x='225.7'
            y='250.2'
            width='165.6'
            height='65.6'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='4' />
            <feGaussianBlur stdDeviation='6.9' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix type='matrix' values='0 0 0 0 0.969775 0 0 0 0 0.0857077 0 0 0 0 0.0857077 0 0 0 0.3 0' />
            <feBlend mode='hard-light' in2='BackgroundImageFix' result='effect1_dropShadow_324_1772' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_324_1772' result='shape' />
          </filter>
          <filter
            id='filter2_d_324_1772'
            x='202.7'
            y='302.2'
            width='211.6'
            height='65.6'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='4' />
            <feGaussianBlur stdDeviation='6.9' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix type='matrix' values='0 0 0 0 0.141176 0 0 0 0 0.964706 0 0 0 0 0.717647 0 0 0 0.2 0' />
            <feBlend mode='hard-light' in2='BackgroundImageFix' result='effect1_dropShadow_324_1772' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_324_1772' result='shape' />
          </filter>
          <filter
            id='filter3_d_324_1772'
            x='763.7'
            y='276.2'
            width='114.6'
            height='65.6'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='4' />
            <feGaussianBlur stdDeviation='6.9' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix type='matrix' values='0 0 0 0 0.0941176 0 0 0 0 0.619608 0 0 0 0 1 0 0 0 0.36 0' />
            <feBlend mode='hard-light' in2='BackgroundImageFix' result='effect1_dropShadow_324_1772' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_324_1772' result='shape' />
          </filter>
          <clipPath id='clip0_324_1772'>
            <rect width='17' height='18' fill='white' transform='translate(502.5 124)' />
          </clipPath>
          <clipPath id='clip1_324_1772'>
            <rect width='17' height='18' fill='white' transform='translate(502.5 124)' />
          </clipPath>
        </defs>
      </svg>{" "}
    </Wrapper>
  );
};

export default DecShaSeqLay;
