import { Injectable } from '@angular/core';

export interface ExpertiseItem {
  name: string;
  svgTemplate: string;
}

export type ExpertiseKey =
  | 'intent-note'
  | 'benchmark'
  | 'data-collection'
  | 'personas'
  | 'empathy-maps'
  | 'experience-vision'
  | 'content-mapping'
  | 'flow-diagrams'
  | 'composition-sketches'
  | 'graphic-mockups'
  | 'low-fidelity-prototype'
  | 'five-second-test'
  | 'high-fidelity-prototype'
  | 'user-test-protocol'
  | 'portfolio-page'
  | 'presentation-video'
  | 'background-research'
  | 'ux-audit'
  | 'quantitative-survey'
  | 'user-case'
  | 'journey-map'
  | 'user-flows'
  | 'hypothesis-formulation'
  | '2x2-matrix'
  | 'welchs-t-test'
  | 'modeling-design-tensions'
  | 'facilitate-ideation-workshops'
  | 'design-system'
  | 'staleholder-presentations';

@Injectable({
  providedIn: 'root'
})
export class ExpertiseService {
  protected readonly expertise: Record<ExpertiseKey, ExpertiseItem> = {
    'intent-note': {
      name: 'Intent Note',
      svgTemplate: '<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M36.1721 1.35042C36.1721 0.604605 35.5675 0 34.8217 0H32.6995C31.9537 0 31.3491 0.604605 31.3491 1.35042V14.4073C31.3491 15.8916 29.3026 16.2894 28.7466 14.9132L23.8554 2.80705C23.576 2.11553 22.7889 1.78144 22.0975 2.06083L20.1299 2.85578C19.4384 3.13517 19.1043 3.92224 19.3836 4.61376L24.5981 17.52C25.1492 18.884 23.4314 20.021 22.3911 18.9808L12.5483 9.13798C12.0209 8.61061 11.1659 8.61061 10.6385 9.13798L9.13798 10.6385C8.61061 11.1659 8.61061 12.0209 9.13798 12.5483L17.9768 21.3871C19.032 22.4423 17.8487 24.1769 16.4812 23.5795L5.02678 18.5749C4.34333 18.2763 3.54726 18.5883 3.24865 19.2717L2.39904 21.2163C2.10044 21.8998 2.41241 22.6959 3.09585 22.9945L16.2949 28.7612C17.6357 29.3471 17.2175 31.3491 15.7542 31.3491H1.35042C0.604605 31.3491 0 31.9537 0 32.6995V34.8217C0 35.5675 0.604605 36.1721 1.35042 36.1721H15.7541C17.2174 36.1721 17.6357 38.1741 16.2948 38.7599L3.09587 44.5269C2.41243 44.8253 2.10046 45.6214 2.39906 46.3047L3.24867 48.2493C3.54726 48.9329 4.34337 49.2449 5.02678 48.9461L16.4812 43.9418C17.8487 43.3442 19.032 45.0788 17.9768 46.1342L9.13798 54.9727C8.61061 55.5004 8.61061 56.3552 9.13798 56.8826L10.6385 58.3832C11.1659 58.9106 12.0209 58.9106 12.5483 58.3832L22.3911 48.5403C23.4314 47.5001 25.1492 48.6372 24.5981 50.0011L19.3836 62.9075C19.1043 63.5989 19.4383 64.3858 20.1299 64.6654L22.0974 65.4604C22.7889 65.7396 23.576 65.4058 23.8554 64.714L28.7466 52.6081C29.3026 51.2317 31.3491 51.6297 31.3491 53.1139V66.1708C31.3491 66.9165 31.9537 67.5212 32.6995 67.5212H34.8217C35.5675 67.5212 36.1721 66.9165 36.1721 66.1708V53.1139C36.1721 51.6297 38.2187 51.2317 38.7747 52.6081L43.6656 64.714C43.9452 65.4058 44.7321 65.7396 45.4239 65.4604L47.3914 64.6654C48.0829 64.3858 48.4171 63.5989 48.1376 62.9075L42.9232 50.0011C42.3719 48.6372 44.0897 47.5001 45.1302 48.5403L54.9727 58.3832C55.5004 58.9106 56.3552 58.9106 56.8826 58.3832L58.3832 56.8826C58.9106 56.3552 58.9106 55.5004 58.3832 54.9727L49.5444 46.1342C48.4893 45.0788 49.6726 43.3442 51.04 43.9418L62.4942 48.9461C63.1779 49.2449 63.974 48.9329 64.2724 48.2493L65.1222 46.3047C65.4206 45.6214 65.1087 44.8253 64.4254 44.5269L51.2263 38.7599C49.8857 38.1741 50.3036 36.1721 51.7672 36.1721H66.1708C66.9165 36.1721 67.5212 35.5675 67.5212 34.8217V32.6995C67.5212 31.9537 66.9165 31.3491 66.1708 31.3491H51.7672C50.3036 31.3491 49.8853 29.3471 51.2263 28.7612L64.4254 22.9945C65.1087 22.6959 65.4206 21.8998 65.1222 21.2163L64.2724 19.2717C63.974 18.5883 63.1779 18.2763 62.4942 18.5749L51.04 23.5795C49.6726 24.1769 48.4893 22.4423 49.5444 21.3871L58.3832 12.5483C58.9106 12.0209 58.9106 11.1659 58.3832 10.6385L56.8826 9.13795C56.3552 8.61057 55.5004 8.61057 54.9727 9.13795L45.1302 18.9808C44.0897 20.021 42.3719 18.884 42.9232 17.52L48.1376 4.61376C48.4171 3.92224 48.0829 3.13517 47.3914 2.85578L45.4239 2.06083C44.7321 1.78144 43.9452 2.11553 43.6656 2.80705L38.7747 14.9132C38.2187 16.2894 36.1721 15.8916 36.1721 14.4073V1.35042Z" fill="url(#gradient-intent-note)"/><defs><linearGradient id="gradient-intent-note" x1="5.04" y1="8.82" x2="62.48" y2="58.7" gradientUnits="userSpaceOnUse"><stop stop-color="var(--gradient-start-intent-note, #D8B4FE)"/><stop offset="1" stop-color="var(--gradient-end-intent-note, #FBE3EA)"/></linearGradient></defs></svg>'
    },
    'benchmark': {
      name: 'Benchmark',
      svgTemplate: '<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.6915 61.3829C28.1338 61.3829 26.0025 60.557 24.2974 58.9052C22.5923 57.2534 21.7398 55.2554 21.7398 52.9108C21.7398 51.5788 22.0062 50.3797 22.539 49.3141C23.0719 48.2485 24.0043 47.0761 25.3364 45.7975C26.7218 44.5186 27.8141 43.3198 28.6134 42.2007C29.4659 41.0286 29.8922 40.0161 29.8922 39.1635V36.2862C28.72 36.0198 27.6809 35.487 26.7751 34.6878C25.9226 33.8352 25.3631 32.8227 25.0966 31.6506H22.2193C21.3135 31.6506 20.2478 32.0769 19.0223 32.9295C17.7968 33.7818 16.6245 34.821 15.5056 36.0465C14.3866 37.272 13.2677 38.1777 12.1487 38.7639C11.083 39.3501 9.85751 39.6432 8.47213 39.6432C6.07436 39.6432 4.04955 38.7906 2.39777 37.0854C0.799258 35.3805 0 33.249 0 30.6915C0 28.1338 0.799258 26.0025 2.39777 24.2974C4.04955 22.5923 6.07436 21.7398 8.47213 21.7398C10.71 21.7398 12.6282 22.539 14.2268 24.1375C15.8253 25.7361 17.2639 27.0948 18.5428 28.2138C19.8216 29.3327 21.0471 29.8922 22.2193 29.8922H25.0966C25.3631 28.6667 25.9226 27.6543 26.7751 26.855C27.6809 26.0025 28.72 25.4696 29.8922 25.2565V22.3792C29.8922 20.9938 28.8265 19.2354 26.6952 17.1041L25.0167 15.4256C22.8321 13.241 21.7398 10.9232 21.7398 8.47213C21.7398 6.07436 22.5923 4.07619 24.2974 2.47769C26.0558 0.825898 28.1871 0 30.6915 0C33.249 0 35.3805 0.825898 37.0854 2.47769C38.7906 4.1295 39.6432 6.12764 39.6432 8.47213C39.6432 11.1896 38.3109 13.7472 35.6469 16.145C32.9826 18.596 31.6506 20.6741 31.6506 22.3792V25.2565C32.8761 25.4696 33.8886 26.0025 34.6878 26.855C35.5404 27.6543 36.0732 28.6667 36.2862 29.8922H39.1635C40.9752 29.8922 43.0534 28.5334 45.3979 25.816C47.7955 23.0985 50.2999 21.7398 52.9108 21.7398C55.3084 21.7398 57.3068 22.619 58.9052 24.3773C60.557 26.0824 61.3829 28.1871 61.3829 30.6915C61.3829 33.249 60.557 35.3805 58.9052 37.0854C57.2534 38.7906 55.2554 39.6432 52.9108 39.6432C50.6728 39.6432 48.7813 38.8704 47.236 37.3254C45.691 35.7801 44.2522 34.4481 42.9202 33.3291C41.5878 32.2101 40.3359 31.6506 39.1635 31.6506H36.2862C35.8599 34.2081 34.3149 35.7534 31.6506 36.2862V39.1635C31.6506 40.7619 32.9826 42.8137 35.6469 45.3178C38.3109 47.8222 39.6432 50.353 39.6432 52.9108C39.6432 55.3084 38.7639 57.3068 37.0056 58.9052C35.3004 60.557 33.1959 61.3829 30.6915 61.3829Z" fill="url(#gradient-benchmark)"/><defs><linearGradient id="gradient-benchmark" x1="48.339" y1="9.82126" x2="13.5042" y2="45.2699" gradientUnits="userSpaceOnUse"><stop offset="0.197115" stop-color="var(--gradient-start-benchmark)"/><stop offset="1" stop-color="var(--gradient-end-benchmark)"/></linearGradient></defs></svg>'
    },
    'data-collection': {
      name: 'Data collection',
      svgTemplate: '<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.6913 47.2272C43.3201 47.2272 54.2781 39.144 59.7338 34.2742C61.932 32.3121 61.932 29.0333 59.7338 27.0712C54.2781 22.2014 43.3201 14.1182 30.6913 14.1182C18.0624 14.1182 7.10443 22.2014 1.64863 27.0712C-0.549546 29.0333 -0.549543 32.3121 1.64863 34.2742C7.10443 39.144 18.0624 47.2272 30.6913 47.2272ZM30.6913 42.2223C37.0701 42.2223 42.2409 37.0514 42.2409 30.6726C42.2409 24.2939 37.0701 19.123 30.6913 19.123C24.3126 19.123 19.1416 24.2939 19.1416 30.6726C19.1416 37.0514 24.3126 42.2223 30.6913 42.2223Z" fill="url(#gradient-data-collection)"/></g><defs><linearGradient id="gradient-data-collection" x1="48.3387" y1="19.4156" x2="32.7868" y2="48.7565" gradientUnits="userSpaceOnUse"><stop offset="0.0509862" stop-color="var(--gradient-start-data-collection, #FFB6E1)"/><stop offset="1" stop-color="var(--gradient-end-data-collection, #FBE3EA)"/></linearGradient><clipPath id="clip0"><rect width="61.3829" height="61.3829" fill="white"/></clipPath></defs></svg>'
    },
    'personas': {
      name: 'Personas',
      svgTemplate: `<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
  <mask id="mask0_personas" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="62" height="62">
    <path d="M61.3829 0H0V61.3829H61.3829V0Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_personas)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6915 0C22.2163 0 15.3457 6.87053 15.3457 15.3457C6.87053 15.3457 6.70783e-07 22.2163 0 30.6915C0 39.1666 6.87053 46.0372 15.3457 46.0372C15.3457 54.5123 22.2163 61.3829 30.6915 61.3829C39.1666 61.3829 46.0372 54.5123 46.0372 46.0372C54.5123 46.0372 61.3829 39.1666 61.3829 30.6915C61.3829 22.2163 54.5123 15.3457 46.0372 15.3457C46.0372 6.87053 39.1666 0 30.6915 0ZM43.0619 18.3209C43.0619 11.4889 37.5234 5.9504 30.6915 5.9504C23.8594 5.9504 18.3209 11.4889 18.3209 18.3209C11.4889 18.3209 5.9504 23.8594 5.9504 30.6915C5.9504 37.5234 11.4889 43.0619 18.3209 43.0619C18.3209 49.8942 23.8594 55.4324 30.6915 55.4324C37.5234 55.4324 43.0619 49.8942 43.0619 43.0619C49.8942 43.0619 55.4324 37.5234 55.4324 30.6915C55.4324 23.8594 49.8942 18.3209 43.0619 18.3209ZM21.2961 21.2961C21.2961 16.1072 25.5025 11.9008 30.6915 11.9008C35.8805 11.9008 40.0867 16.1072 40.0867 21.2961C45.2757 21.2961 49.482 25.5025 49.482 30.6915C49.482 35.8805 45.2757 40.0867 40.0867 40.0867C40.0867 45.2757 35.8805 49.482 30.6915 49.482C25.5025 49.482 21.2961 45.2757 21.2961 40.0867C16.1072 40.0867 11.9008 35.8805 11.9008 30.6915C11.9008 25.5025 16.1072 21.2961 21.2961 21.2961Z" fill="url(#gradient-personas)"/>
  </g>
  <defs>
    <linearGradient id="gradient-personas" x1="4.2968" y1="7.97978" x2="54.9377" y2="55.0912" gradientUnits="userSpaceOnUse">
      <stop stop-color="var(--gradient-start-personas, #E9B8FF)"/>
      <stop offset="1" stop-color="var(--gradient-end-personas, #F9ECFF)"/>
    </linearGradient>
  </defs>
</svg>`
    },
    'empathy-maps': {
      name: 'Empathy maps',
      svgTemplate: '<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3459 30.6915C23.8211 30.6915 30.6917 23.8209 30.6917 15.3457C30.6917 23.8209 37.5622 30.6915 46.0374 30.6915C37.5622 30.6915 30.6917 37.562 30.6917 46.0372C30.6917 37.562 23.8211 30.6915 15.3459 30.6915ZM15.3459 30.6915C6.87074 30.6915 0.000209263 37.562 0.000209263 46.0372C0.000209263 54.5123 6.87074 61.3829 15.3459 61.3829C23.8211 61.3829 30.6917 54.5123 30.6917 46.0372C30.6917 54.5123 37.5622 61.3829 46.0374 61.3829C54.5125 61.3829 61.3831 54.5123 61.3831 46.0372C61.3831 37.562 54.5125 30.6915 46.0374 30.6915C54.5125 30.6915 61.3831 23.8209 61.3831 15.3457C61.3831 6.87053 54.5125 0 46.0374 0C37.5622 0 30.6917 6.87053 30.6917 15.3457C30.6917 6.87053 23.8211 0 15.3459 0C6.87074 0 0.000209263 6.87053 0.000209263 15.3457C0.000209263 23.8209 6.87074 30.6915 15.3459 30.6915Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="4.2968" y1="7.97978" x2="54.9377" y2="55.0912" gradientUnits="userSpaceOnUse"><stop stop-color="var(--gradient-start, #E9B8FF)"/><stop offset="1" stop-color="var(--gradient-end, #F9ECFF)"/></linearGradient></defs></svg>'
    },
    'experience-vision': {
      name: 'Experience Vision',
      svgTemplate: '<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="62" height="62"><path d="M61.3829 0H0V61.3829H61.3829V0Z" fill="white"/></mask><g mask="url(#mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.6915 6.75212C30.6915 3.02303 27.6684 0 23.9393 0H6.75212C3.02303 0 0 3.02302 0 6.75212V24.1601C0 27.8892 3.02303 30.9121 6.75212 30.9121H23.9393C27.6684 30.9121 30.6915 33.9352 30.6915 37.6642V54.6308C30.6915 58.3598 33.7146 61.3829 37.4436 61.3829H54.6308C58.3598 61.3829 61.3829 58.3598 61.3829 54.6308V37.2226C61.3829 33.4936 58.3598 30.4706 54.6308 30.4706H37.4436C33.7146 30.4706 30.6915 27.4476 30.6915 23.7185V6.75212Z" fill="url(#paint0_linear)"/></g><defs><linearGradient id="paint0_linear" x1="4.2968" y1="7.97978" x2="54.9377" y2="55.0912" gradientUnits="userSpaceOnUse"><stop stop-color="var(--gradient-start, #E9B8FF)"/><stop offset="1" stop-color="var(--gradient-end, #F9ECFF)"/></linearGradient></defs></svg>'
    },
    'content-mapping': {
      name: 'Content Mapping',
      svgTemplate: '<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.6915 7.16637e-05C31.7334 16.4997 44.8832 29.6496 61.3829 30.6915C44.8832 31.7335 31.7334 44.8832 30.6915 61.383C29.6495 44.8832 16.4996 31.7335 0 30.6915C16.4996 29.6496 29.6495 16.4997 30.6915 7.16637e-05Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="30.6915" y1="7.16637e-05" x2="30.6915" y2="61.383" gradientUnits="userSpaceOnUse"><stop stop-color="var(--gradient-start, #DF99F7)"/><stop offset="1" stop-color="var(--gradient-end, #FFDBB0)"/></linearGradient></defs></svg>'
    },
    'flow-diagrams': {
      name: 'Flow Diagrams',
      svgTemplate: '<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.2758 53.6035L13.2758 61.3829H17.4157V53.6035C17.4157 50.5678 19.8766 48.107 22.9122 48.107H22.9272H30.6915H38.4552H38.4708C41.5062 48.107 43.9673 50.5678 43.9673 53.6035V61.3829H48.107V53.6035C48.107 50.5678 50.5682 48.107 53.6038 48.107H53.6186H61.3829V43.9673H53.6186H53.6038C50.5682 43.9673 48.107 41.5065 48.107 38.4708V30.6915V22.9122C48.107 19.8765 50.5682 17.4156 53.6038 17.4156L53.6186 17.4157H61.3829V13.2758H53.6186H53.6038C50.5682 13.2758 48.107 10.8149 48.107 7.77924V0L43.9673 1.80957e-07V7.77924C43.9673 10.8149 41.5062 13.2758 38.4708 13.2758H38.4558H30.6915H22.9272H22.9122C19.8766 13.2758 17.4157 10.8149 17.4157 7.77924V1.34156e-06L13.2758 1.52253e-06V7.77924C13.2758 10.8149 10.8149 13.2758 7.77921 13.2758L7.76426 13.2758H0L2.30339e-08 17.4157H7.76383L7.77921 17.4156C10.8149 17.4156 13.2758 19.8765 13.2758 22.9122L13.2758 30.6915L13.2758 38.4708C13.2758 41.5065 10.8149 43.9673 7.77921 43.9673H7.76426H0L2.30339e-08 48.107H7.76383H7.77921C10.8149 48.107 13.2758 50.5678 13.2758 53.6035ZM43.9673 30.6915V22.9122C43.9673 19.8765 41.5062 17.4156 38.4708 17.4156L38.4552 17.4157H30.6915H22.9272L22.9122 17.4156C19.8766 17.4156 17.4157 19.8765 17.4157 22.9122V30.6915V38.4708C17.4157 41.5065 19.8766 43.9673 22.9122 43.9673H22.9272H30.6915H38.4558H38.4708C41.5062 43.9673 43.9673 41.5065 43.9673 38.4708V30.6915Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="-7.38228e-07" y1="30.6915" x2="61.3829" y2="30.6915" gradientUnits="userSpaceOnUse"><stop stop-color="var(--gradient-start, #A7B5FF)"/><stop offset="1" stop-color="var(--gradient-end, #F3ACFF)"/></linearGradient></defs></svg>'
    },
    'composition-sketches': {
      name: 'Composition Sketches',
      svgTemplate: '<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M36.8298 6.73076e-05H24.5532V33.7607C24.5532 37.1508 21.805 39.899 18.4149 39.899C15.0248 39.899 12.2766 37.1508 12.2766 33.7607V6.73076e-05H3.84349e-05V30.6915C3.84349e-05 47.6418 13.7411 61.383 30.6915 61.383C47.6418 61.383 61.3829 47.6418 61.3829 30.6915V6.73076e-05H49.1064V33.7607C49.1064 37.1508 46.3582 39.899 42.9681 39.899C39.5779 39.899 36.8298 37.1508 36.8298 33.7607V6.73076e-05Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="30.6915" y1="6.73076e-05" x2="30.6915" y2="61.383" gradientUnits="userSpaceOnUse"><stop stop-color="var(--gradient-start, #A7B5FF)"/><stop offset="1" stop-color="var(--gradient-end, #F3ACFF)"/></linearGradient></defs></svg>'
    },
    'graphic-mockups': {
      name: 'Graphic Mockups',
      svgTemplate: '<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M38.3333 1.50914L32.4716 26.3941L45.9227 4.65282C46.3395 3.97948 47.275 3.87078 47.8348 4.43065L56.9523 13.548C57.5121 14.1079 57.4034 15.0435 56.7301 15.4601L34.9889 28.9115L59.8738 23.0496C60.6445 22.868 61.3829 23.4528 61.3829 24.2446V37.1385C61.3829 37.9303 60.6445 38.515 59.8738 38.3333L34.9889 32.4716L56.7301 45.923C57.4034 46.3395 57.5121 47.275 56.9523 47.8351L47.8348 56.9523C47.275 57.5121 46.3395 57.4034 45.9227 56.7301L32.4716 34.9889L38.3333 59.8738C38.515 60.6445 37.93 61.3829 37.1385 61.3829H24.2445C23.4527 61.3829 22.868 60.6445 23.0496 59.8738L28.9114 34.9889L15.4601 56.7301C15.0435 57.4034 14.1079 57.5121 13.548 56.9523L4.43065 47.8348C3.87078 47.275 3.97948 46.3395 4.65282 45.9227L26.3939 32.4716L1.50914 38.3333C0.738455 38.515 0 37.9303 0 37.1385V24.2445C5.98219e-07 23.4527 0.738452 22.868 1.50914 23.0496L26.394 28.9114L4.65282 15.4601C3.97948 15.0435 3.87078 14.1079 4.43065 13.548L13.548 4.43068C14.1079 3.87081 15.0435 3.97951 15.4601 4.65285L28.9114 26.3941L23.0496 1.50914C22.868 0.738455 23.4527 1.19644e-06 24.2445 1.12722e-06L37.1385 0C37.9303 0 38.515 0.738452 38.3333 1.50914ZM30.6915 34.1992C32.6287 34.1992 34.1992 32.6287 34.1992 30.6915C34.1992 28.7543 32.6287 27.1838 30.6915 27.1838C28.7543 27.1838 27.1838 28.7543 27.1838 30.6915C27.1838 32.6287 28.7543 34.1992 30.6915 34.1992Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="4.2968" y1="7.97978" x2="54.9377" y2="55.0912" gradientUnits="userSpaceOnUse"><stop stop-color="var(--gradient-start, #E9B8FF)"/><stop offset="1" stop-color="var(--gradient-end, #F9ECFF)"/></linearGradient></defs></svg>'
    },
    'low-fidelity-prototype': {
      name: 'Low-Fidelity Prototype',
      svgTemplate: '<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5042 0H0V46.0372C0 54.5123 6.87053 61.3829 15.3457 61.3829H28.85V15.3457C28.85 6.87053 21.9794 0 13.5042 0ZM47.8787 0C39.4035 0 32.5329 6.87053 32.5329 15.3457V61.3829H46.0372C54.5123 61.3829 61.3829 54.5123 61.3829 46.0372V0H47.8787Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="30.6915" y1="0" x2="30.6915" y2="61.3829" gradientUnits="userSpaceOnUse"><stop stop-color="var(--gradient-start, #DF99F7)"/><stop offset="1" stop-color="var(--gradient-end, #FFDBB0)"/></linearGradient></defs></svg>'
    },
    'five-second-test': {
      name: 'Five-Second Test Protocol & Report',
      svgTemplate: '<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M61.3829 46.0372H44.119C44.119 38.6215 38.1071 32.6096 30.6915 32.6096C23.2756 32.6096 17.2639 38.6215 17.2639 46.0372H0C0 29.0867 13.741 15.3457 30.6915 15.3457C47.6417 15.3457 61.3829 29.0867 61.3829 46.0372Z" fill="url(#paint0_linear)"/></g><defs><linearGradient id="paint0_linear" x1="30.6915" y1="15.3457" x2="30.6915" y2="46.0372" gradientUnits="userSpaceOnUse"><stop stop-color="var(--gradient-start, #A7B5FF)"/><stop offset="1" stop-color="var(--gradient-end, #F3ACFF)"/></linearGradient><clipPath id="clip0"><rect width="61.3829" height="61.3829" fill="white"/></clipPath></defs></svg>'
    },
    'high-fidelity-prototype': {
      name: 'Low-Fi & High-Fi Prototyping',
      svgTemplate: '<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="62" height="62"><path d="M61.3829 0H0V61.3829H61.3829V0Z" fill="white"/></mask><g mask="url(#mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.06022 30.6914C-11.3386 53.9052 7.47779 72.7215 30.6914 53.3227C53.9006 72.7215 72.7215 53.8874 53.3227 30.6914C72.7215 7.47779 53.9006 -11.3386 30.6914 8.06022C7.47779 -11.3386 -11.3386 7.47779 8.06022 30.6914ZM30.6914 42.0473C36.9632 42.0473 42.0473 36.9632 42.0473 30.6914C42.0473 24.4198 36.9632 19.3356 30.6914 19.3356C24.4198 19.3356 19.3356 24.4198 19.3356 30.6914C19.3356 36.9632 24.4198 42.0473 30.6914 42.0473Z" fill="url(#paint0_linear)"/></g><defs><linearGradient id="paint0_linear" x1="4.29674" y1="7.97977" x2="54.9377" y2="55.0905" gradientUnits="userSpaceOnUse"><stop stop-color="var(--gradient-start, #E9B8FF)"/><stop offset="1" stop-color="var(--gradient-end, #F9ECFF)"/></linearGradient></defs></svg>'
    },
    'user-test-protocol': {
      name: 'User Test Protocol & Report',
      svgTemplate: '<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M32.8316 26.8858C31.893 28.5549 29.4899 28.5549 28.5513 26.8858L15.4896 3.65882C14.5691 2.02211 15.7519 2.44796e-06 17.6297 1.74118e-06L43.7531 0C45.6311 -1.6416e-07 46.8137 2.0221 45.8932 3.65882L32.8316 26.8858ZM26.8858 32.8316C28.5549 31.893 28.5549 29.4899 26.8858 28.5513L3.65882 15.4895C2.0221 14.5691 1.22398e-06 15.7519 1.14191e-06 17.6296L0 43.7531C-8.20689e-08 45.6311 2.02211 46.8137 3.65882 45.8932L26.8858 32.8316ZM32.8316 34.4972C31.893 32.8279 29.4899 32.8282 28.5513 34.4972L15.4896 57.7242C14.5691 59.3609 15.7519 61.3829 17.6297 61.3829H43.7531C45.6311 61.3829 46.8137 59.3606 45.8932 57.7242L32.8316 34.4972ZM34.4972 28.5513C32.8279 29.49 32.8279 31.893 34.4972 32.8316L57.7242 45.8932C59.361 46.8137 61.3829 45.6311 61.3829 43.7531V17.6297C61.3829 15.7519 59.3606 14.5691 57.7242 15.4896L34.4972 28.5513Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="30.6915" y1="0" x2="30.6915" y2="61.3829" gradientUnits="userSpaceOnUse"><stop stop-color="var(--gradient-start, #DF99F7)"/><stop offset="1" stop-color="var(--gradient-end, #FFDBB0)"/></linearGradient></defs></svg>'
    },
    'portfolio-page': {
      name: 'Portfolio Page',
      svgTemplate: '<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.84349e-05 0.000112292H30.6915C47.6418 0.000112292 61.3829 13.7411 61.3829 30.6916V61.383H30.6915C13.7411 61.383 3.84349e-05 47.6418 3.84349e-05 30.6916V0.000112292Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="30.6915" y1="0.000112292" x2="30.6915" y2="61.383" gradientUnits="userSpaceOnUse"><stop stop-color="var(--gradient-start, #A7B5FF)"/><stop offset="1" stop-color="var(--gradient-end, #F3ACFF)"/></linearGradient></defs></svg>'
    },
    'presentation-video': {
      name: 'Presentation Video',
      svgTemplate: '<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.6916 30.6915H0.000191103V0C16.9506 1.48185e-06 30.6916 13.741 30.6916 30.6915ZM61.3831 30.6915V0C44.4328 0 30.6916 13.741 30.6916 30.6915H61.3831ZM30.6916 61.3829H0.000191103V30.6915C16.9506 30.6915 30.6916 44.4326 30.6916 61.3829ZM30.6916 61.3829H61.3831V30.6915C44.4328 30.6915 30.6916 44.4326 30.6916 61.3829Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="30.6916" y1="0" x2="30.6916" y2="61.3829" gradientUnits="userSpaceOnUse"><stop stop-color="var(--gradient-start, #FF3F49)"/><stop offset="1" stop-color="var(--gradient-end, #D8B4FE)"/></linearGradient></defs></svg>'
    },
    'background-research': {
      name: 'Background research',
      svgTemplate: `<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
  <mask id="mask0_background-research" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="62" height="62">
    <path d="M62 0H0V62H62V0Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_background-research)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7214 0H0.22143V15.5C0.22143 23.3932 6.12145 29.9084 13.7519 30.8761C6.01447 31.7446 1.30828e-06 38.3092 6.77527e-07 46.2787L0 61.7787H15.5C23.3932 61.7787 29.9084 55.8784 30.8761 48.2481C31.7446 55.9857 38.3092 62 46.2787 62H61.7787V46.5C61.7787 38.6068 55.8784 32.0915 48.2481 31.124C55.9857 30.2555 62 23.6908 62 15.7214V0.221429L46.5 0.221428C38.6068 0.221427 32.0915 6.12145 31.124 13.7519C30.2555 6.01447 23.6908 0 15.7214 0Z" fill="url(#gradient-background-research)"/>
  </g>
  <defs>
    <linearGradient id="gradient-background-research" x1="8.525" y1="5.89" x2="46.19" y2="54.095" gradientUnits="userSpaceOnUse">
      <stop stop-color="var(--gradient-start-background-research, #FFD9A0)"/>
      <stop offset="1" stop-color="var(--gradient-end-background-research, #FFF5F1)"/>
    </linearGradient>
  </defs>
</svg>`
    },
    'ux-audit': {
      name: 'UX Audit (Heuristic Evaluation)',
      svgTemplate: `<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5042 0H0V46.0372C0 54.5123 6.87053 61.3829 15.3457 61.3829H28.85V15.3457C28.85 6.87053 21.9794 0 13.5042 0ZM47.8787 0C39.4035 0 32.5329 6.87053 32.5329 15.3457V61.3829H46.0372C54.5123 61.3829 61.3829 54.5123 61.3829 46.0372V0H47.8787Z" fill="url('#gradient-ux-audit')"/>
  <defs>
    <linearGradient id="gradient-ux-audit" x1="30.6915" y1="0" x2="30.6915" y2="61.3829" gradientUnits="userSpaceOnUse">
      <stop stop-color="var(--gradient-start, #ffffff)"/>
      <stop offset="1" stop-color="var(--gradient-end, #ffffff)"/>
    </linearGradient>
  </defs>
</svg>`
    },
    'quantitative-survey': {
      name: 'Quantative survey',
      svgTemplate: `<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M37.2 4.42857C37.2 1.98274 35.2172 0 32.7713 0H29.2286C26.7827 0 24.8 1.98274 24.8 4.42857V5.34034C24.8 9.28577 20.0298 11.2616 17.24 8.4718L16.5952 7.8271C14.8658 6.09764 12.0618 6.09764 10.3323 7.8271L7.8271 10.3323C6.09764 12.0617 6.09764 14.8657 7.8271 16.5952L8.47184 17.24C11.2617 20.0298 9.2858 24.8 5.34037 24.8H4.42857C1.98274 24.8 0 26.7827 0 29.2286V32.7713C0 35.2172 1.98274 37.2 4.42857 37.2H5.34034C9.2858 37.2 11.2617 41.9703 8.47184 44.76L7.8271 45.4048C6.09764 47.1343 6.09764 49.9382 7.8271 51.6677L10.3323 54.1728C12.0618 55.9023 14.8658 55.9023 16.5952 54.1728L17.24 53.528C20.0298 50.7383 24.8 52.7143 24.8 56.6596V57.5713C24.8 60.0172 26.7827 62 29.2286 62H32.7713C35.2172 62 37.2 60.0172 37.2 57.5713V56.6596C37.2 52.7143 41.9703 50.7383 44.76 53.528L45.4048 54.1728C47.1343 55.9023 49.9382 55.9023 51.6677 54.1728L54.1728 51.6677C55.9023 49.9382 55.9023 47.1343 54.1728 45.4048L53.5283 44.76C50.7383 41.9703 52.7143 37.2 56.6596 37.2H57.5713C60.0172 37.2 62 35.2172 62 32.7713V29.2286C62 26.7827 60.0172 24.8 57.5713 24.8H56.6596C52.7143 24.8 50.7383 20.0298 53.528 17.24L54.1728 16.5952C55.9023 14.8657 55.9023 12.0617 54.1728 10.3323L51.6677 7.8271C49.9382 6.09761 47.1343 6.09761 45.4048 7.8271L44.76 8.4718C41.9703 11.2616 37.2 9.28577 37.2 5.34034V4.42857Z" fill="url(#gradient-quantitative-survey)"/>
  <defs>
    <linearGradient id="gradient-quantitative-survey" x1="4.34" y1="8.06" x2="55.49" y2="55.645" gradientUnits="userSpaceOnUse">
      <stop stop-color="var(--gradient-start-quantitative-survey, #3263A8)"/>
      <stop offset="1" stop-color="var(--gradient-end-quantitative-survey, #82D1C4)"/>
    </linearGradient>
  </defs>
</svg>`
    },
    'user-case': {
      name: 'User case',
      svgTemplate: '<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3459 30.6915C23.8211 30.6915 30.6917 23.8209 30.6917 15.3457C30.6917 23.8209 37.5622 30.6915 46.0374 30.6915C37.5622 30.6915 30.6917 37.562 30.6917 46.0372C30.6917 37.562 23.8211 30.6915 15.3459 30.6915ZM15.3459 30.6915C6.87074 30.6915 0.000209263 37.562 0.000209263 46.0372C0.000209263 54.5123 6.87074 61.3829 15.3459 61.3829C23.8211 61.3829 30.6917 54.5123 30.6917 46.0372C30.6917 54.5123 37.5622 61.3829 46.0374 61.3829C54.5125 61.3829 61.3831 54.5123 61.3831 46.0372C61.3831 37.562 54.5125 30.6915 46.0374 30.6915C54.5125 30.6915 61.3831 23.8209 61.3831 15.3457C61.3831 6.87053 54.5125 0 46.0374 0C37.5622 0 30.6917 6.87053 30.6917 15.3457C30.6917 6.87053 23.8211 0 15.3459 0C6.87074 0 0.000209263 6.87053 0.000209263 15.3457C0.000209263 23.8209 6.87074 30.6915 15.3459 30.6915Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="4.2968" y1="7.97978" x2="54.9377" y2="55.0912" gradientUnits="userSpaceOnUse"><stop stop-color="var(--gradient-start, #E9B8FF)"/><stop offset="1" stop-color="var(--gradient-end, #F9ECFF)"/></linearGradient></defs></svg>'
    },
    'user-flows': {
      name: 'User Flows',
      svgTemplate: '<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.2758 53.6035L13.2758 61.3829H17.4157V53.6035C17.4157 50.5678 19.8766 48.107 22.9122 48.107H22.9272H30.6915H38.4552H38.4708C41.5062 48.107 43.9673 50.5678 43.9673 53.6035V61.3829H48.107V53.6035C48.107 50.5678 50.5682 48.107 53.6038 48.107H53.6186H61.3829V43.9673H53.6186H53.6038C50.5682 43.9673 48.107 41.5065 48.107 38.4708V30.6915V22.9122C48.107 19.8765 50.5682 17.4156 53.6038 17.4156L53.6186 17.4157H61.3829V13.2758H53.6186H53.6038C50.5682 13.2758 48.107 10.8149 48.107 7.77924V0L43.9673 1.80957e-07V7.77924C43.9673 10.8149 41.5062 13.2758 38.4708 13.2758H38.4558H30.6915H22.9272H22.9122C19.8766 13.2758 17.4157 10.8149 17.4157 7.77924V1.34156e-06L13.2758 1.52253e-06V7.77924C13.2758 10.8149 10.8149 13.2758 7.77921 13.2758L7.76426 13.2758H0L2.30339e-08 17.4157H7.76383L7.77921 17.4156C10.8149 17.4156 13.2758 19.8765 13.2758 22.9122L13.2758 30.6915L13.2758 38.4708C13.2758 41.5065 10.8149 43.9673 7.77921 43.9673H7.76426H0L2.30339e-08 48.107H7.76383H7.77921C10.8149 48.107 13.2758 50.5678 13.2758 53.6035ZM43.9673 30.6915V22.9122C43.9673 19.8765 41.5062 17.4156 38.4708 17.4156L38.4552 17.4157H30.6915H22.9272L22.9122 17.4156C19.8766 17.4156 17.4157 19.8765 17.4157 22.9122V30.6915V38.4708C17.4157 41.5065 19.8766 43.9673 22.9122 43.9673H22.9272H30.6915H38.4558H38.4708C41.5062 43.9673 43.9673 41.5065 43.9673 38.4708V30.6915Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="-7.38228e-07" y1="30.6915" x2="61.3829" y2="30.6915" gradientUnits="userSpaceOnUse"><stop stop-color="var(--gradient-start, #A7B5FF)"/><stop offset="1" stop-color="var(--gradient-end, #F3ACFF)"/></linearGradient></defs></svg>'
    },
    'hypothesis-formulation': {
      name: 'Hypothesis formulation',
      svgTemplate: `<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
  <mask id="mask0_hypothesis-formulation" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="62" height="62">
    <path d="M62 0H0V62H62V0Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_hypothesis-formulation)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H20.6667V20.6667H0V0ZM41.3332 20.6667H20.6667V41.3332H0V62H20.6667V41.3332H41.3332V62H62V41.3332H41.3332V20.6667ZM41.3332 20.6667H62V0H41.3332V20.6667Z" fill="white"/>
  </g>
</svg>`
    },
    '2x2-matrix': {
      name: '2x2 matrix',
      svgTemplate: `<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M41.6492 0H19.7278V19.7293H-0.00146389L-0.00146484 41.6506H19.7278V61.38H41.6492V41.6506H61.3785V19.7293H41.6492V0Z" fill="url(#gradient-2x2-matrix)"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M41.6492 0H19.7278V19.7293H-0.00146389L-0.00146484 41.6506H19.7278V61.38H41.6492V41.6506H61.3785V19.7293H41.6492V0Z" fill="white"/>
  <defs>
    <linearGradient id="gradient-2x2-matrix" x1="54.3198" y1="-3.07751e-06" x2="12.1211" y2="46.8023" gradientUnits="userSpaceOnUse">
      <stop stop-color="var(--gradient-start-2x2-matrix, #B0B9FF)"/>
      <stop offset="1" stop-color="var(--gradient-end-2x2-matrix, #E7E9FF)"/>
    </linearGradient>
  </defs>
</svg>`
    },
    'welchs-t-test': {
      name: "Welch's t-test",
      svgTemplate: `<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
  <g clip-path="url(#clip0_57_1305)">
    <path d="M52.6996 40.1438C52.6996 52.2145 42.9842 62 30.9996 62C19.015 62 9.29956 52.2145 9.29956 40.1438C9.29956 28.7181 20.4097 14.944 29.4845 2.1558C30.2283 1.10752 31.7863 1.097 32.5415 2.1372C41.9584 15.1084 52.6996 28.7032 52.6996 40.1438Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_57_1305">
      <rect width="62" height="62" fill="white"/>
    </clipPath>
  </defs>
</svg>`
    },
    'modeling-design-tensions': {
      name: 'Modeling of design tensions',
      svgTemplate: `<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
  <mask id="mask0_178_377" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="-1" y="0" width="63" height="62">
    <path d="M61.9985 0H-0.00146484V62H61.9985V0Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_178_377)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M61.9985 31.208L30.9985 0L-0.00146484 31.208H30.5852L-0.00146484 62H61.9985L31.4118 31.208H61.9985Z" fill="url(#paint0_linear_178_377)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M61.9985 31.208L30.9985 0L-0.00146484 31.208H30.5852L-0.00146484 62H61.9985L31.4118 31.208H61.9985Z" fill="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_178_377" x1="6.35354" y1="4.96" x2="30.9985" y2="62" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ACAAFF"/>
      <stop offset="1" stop-color="#C0E8FF"/>
    </linearGradient>
  </defs>
</svg>`
    },
    'facilitate-ideation-workshops': {
      name: 'Facilitate ideation workshops',
      svgTemplate: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="62" viewBox="0 0 56 62" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M37.1005 14.4449C37.6394 13.1848 37.9384 11.7942 37.9384 10.3328C37.9384 4.62615 33.3812 0 27.7597 0C22.1383 0 17.5812 4.62615 17.5812 10.3328C17.5812 11.7942 17.8801 13.1848 18.4191 14.4449C16.569 11.8596 13.5672 10.1786 10.1786 10.1786C4.5571 10.1786 0 14.8048 0 20.5114C0 25.6081 3.63502 29.843 8.41679 30.69C3.63502 31.537 0 35.772 0 40.8686C0 46.5751 4.5571 51.2014 10.1786 51.2014C13.5672 51.2014 16.569 49.5205 18.4191 46.9351C17.8801 48.1953 17.5812 49.5858 17.5812 51.0473C17.5812 56.7538 22.1383 61.38 27.7597 61.38C33.3812 61.38 37.9384 56.7538 37.9384 51.0473C37.9384 49.5858 37.6394 48.1953 37.1005 46.9351C38.9505 49.5205 41.9523 51.2014 45.3411 51.2014C50.9626 51.2014 55.5197 46.5751 55.5197 40.8686C55.5197 35.772 51.8845 31.537 47.1027 30.69C51.8845 29.843 55.5197 25.6081 55.5197 20.5114C55.5197 14.8048 50.9626 10.1786 45.3411 10.1786C41.9523 10.1786 38.9505 11.8596 37.1005 14.4449ZM36.0003 44.9808C35.4614 43.7207 35.1625 42.3301 35.1625 40.8686C35.1625 35.772 38.7974 31.537 43.5792 30.69C38.7974 29.843 35.1625 25.6081 35.1625 20.5114C35.1625 19.05 35.4614 17.6595 36.0003 16.3993C34.1503 18.9846 31.1485 20.6656 27.7597 20.6656C24.3712 20.6656 21.3694 18.9846 19.5193 16.3993C20.0583 17.6595 20.3572 19.05 20.3572 20.5114C20.3572 25.6081 16.7222 29.843 11.9404 30.69C16.7222 31.537 20.3572 35.772 20.3572 40.8686C20.3572 42.3301 20.0583 43.7207 19.5193 44.9808C21.3694 42.3955 24.3712 40.7143 27.7597 40.7143C31.1485 40.7143 34.1503 42.3955 36.0003 44.9808Z" fill="url(#paint0_linear_178_723)"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M37.1005 14.4449C37.6394 13.1848 37.9384 11.7942 37.9384 10.3328C37.9384 4.62615 33.3812 0 27.7597 0C22.1383 0 17.5812 4.62615 17.5812 10.3328C17.5812 11.7942 17.8801 13.1848 18.4191 14.4449C16.569 11.8596 13.5672 10.1786 10.1786 10.1786C4.5571 10.1786 0 14.8048 0 20.5114C0 25.6081 3.63502 29.843 8.41679 30.69C3.63502 31.537 0 35.772 0 40.8686C0 46.5751 4.5571 51.2014 10.1786 51.2014C13.5672 51.2014 16.569 49.5205 18.4191 46.9351C17.8801 48.1953 17.5812 49.5858 17.5812 51.0473C17.5812 56.7538 22.1383 61.38 27.7597 61.38C33.3812 61.38 37.9384 56.7538 37.9384 51.0473C37.9384 49.5858 37.6394 48.1953 37.1005 46.9351C38.9505 49.5205 41.9523 51.2014 45.3411 51.2014C50.9626 51.2014 55.5197 46.5751 55.5197 40.8686C55.5197 35.772 51.8845 31.537 47.1027 30.69C51.8845 29.843 55.5197 25.6081 55.5197 20.5114C55.5197 14.8048 50.9626 10.1786 45.3411 10.1786C41.9523 10.1786 38.9505 11.8596 37.1005 14.4449ZM36.0003 44.9808C35.4614 43.7207 35.1625 42.3301 35.1625 40.8686C35.1625 35.772 38.7974 31.537 43.5792 30.69C38.7974 29.843 35.1625 25.6081 35.1625 20.5114C35.1625 19.05 35.4614 17.6595 36.0003 16.3993C34.1503 18.9846 31.1485 20.6656 27.7597 20.6656C24.3712 20.6656 21.3694 18.9846 19.5193 16.3993C20.0583 17.6595 20.3572 19.05 20.3572 20.5114C20.3572 25.6081 16.7222 29.843 11.9404 30.69C16.7222 31.537 20.3572 35.772 20.3572 40.8686C20.3572 42.3301 20.0583 43.7207 19.5193 44.9808C21.3694 42.3955 24.3712 40.7143 27.7597 40.7143C31.1485 40.7143 34.1503 42.3955 36.0003 44.9808Z" fill="white"/>
  <defs>
    <linearGradient id="paint0_linear_178_723" x1="49.1347" y1="-6.29576e-06" x2="6.70991" y2="42.5606" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B0B9FF"/>
      <stop offset="1" stop-color="#E7E9FF"/>
    </linearGradient>
  </defs>
</svg>`
    },
    'design-system': {
      name: 'Design System Documentation',
      svgTemplate: `<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
  <path d="M61.3828 0H30.6914C13.7411 0 -8.91685e-05 13.741 -8.91685e-05 30.6915V61.3829H30.6914C47.6418 61.3829 61.3828 47.6417 61.3828 30.6915V0Z" fill="url(#paint0_linear_178_775)"/>
  <path d="M61.3828 0H30.6914C13.7411 0 -8.91685e-05 13.741 -8.91685e-05 30.6915V61.3829H30.6914C47.6418 61.3829 61.3828 47.6417 61.3828 30.6915V0Z" fill="white"/>
  <defs>
    <linearGradient id="paint0_linear_178_775" x1="30.6914" y1="0" x2="30.6914" y2="61.3829" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A7B5FF"/>
      <stop offset="1" stop-color="#F3ACFF"/>
    </linearGradient>
  </defs>
</svg>`
    },
    'staleholder-presentations': {
      name: 'Stakeholder Presentations',
      svgTemplate: `<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
  <path d="M-0.00146484 0H30.69C47.6403 0 61.3814 13.741 61.3814 30.6915V61.3829H30.69C13.7396 61.3829 -0.00146484 47.6417 -0.00146484 30.6915V0Z" fill="white"/>
</svg>`
    },
    'journey-map': {
      name: 'Journey Map',
      svgTemplate: `<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
  <mask id="mask0_178_235" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="-1" y="0" width="63" height="62">
    <path d="M61.3814 0H-0.00146484V61.3829H61.3814V0Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_178_235)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.69 6.75212C30.69 3.02303 27.667 0 23.9379 0H6.75065C3.02156 0 -0.00146484 3.02302 -0.00146484 6.75212V24.1601C-0.00146484 27.8892 3.02156 30.9121 6.75065 30.9121H23.9379C27.667 30.9121 30.69 33.9352 30.69 37.6642V54.6308C30.69 58.3598 33.7131 61.3829 37.4421 61.3829H54.6293C58.3583 61.3829 61.3814 58.3598 61.3814 54.6308V37.2226C61.3814 33.4936 58.3583 30.4706 54.6293 30.4706H37.4421C33.7131 30.4706 30.69 27.4476 30.69 23.7185V6.75212Z" fill="url(#gradient-journey-map)"/>
  </g>
  <defs>
    <linearGradient id="gradient-journey-map" x1="4.29534" y1="7.97978" x2="54.9362" y2="55.0912" gradientUnits="userSpaceOnUse">
      <stop stop-color="var(--gradient-start, #4B79BC)"/>
      <stop offset="1" stop-color="var(--gradient-end, #EC1F44)"/>
    </linearGradient>
  </defs>
</svg>`
    }
  };

  public getExpertiseItem(key: ExpertiseKey): ExpertiseItem {
    return this.expertise[key];
  }

  public getAllExpertiseItems(): ExpertiseItem[] {
    return Object.values(this.expertise);
  }

  public getExpertiseCollection(keys: ExpertiseKey[]): ExpertiseItem[] {
    return keys.map(key => this.expertise[key]);
  }
}
