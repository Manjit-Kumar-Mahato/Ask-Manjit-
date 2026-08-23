import {
  ArrowUpRight,
  Code2,
  Target,
  TrendingUp,
  Trophy,
} from "lucide-react";

export const CodingProfile = () => {
  const profiles = [
    {
      platform: "LeetCode",
      shortName: "LC",
      rating: "1900+",
      solved: "500+",
      rank: "Knight",
      link: "https://leetcode.com/u/Manjit-Kumar-Mahato/",
    },
    {
      platform: "Codeforces",
      shortName: "CF",
      rating: "1500+",
      solved: "60+",
      rank: "Specialist",
      link: "https://codeforces.com/profile/Manjit_Kumar_Mahato",
    },
    {
      platform: "CodeChef",
      shortName: "CC",
      rating: "1500+",
      solved: "60+",
      rank: "2 Star",
      link: "https://www.codechef.com/users/manjit_kumar",
    },
  ];

  return (
    <section
      id="profiles"
      className="
        relative
        overflow-hidden
        py-24
        md:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND / CENTRAL CODING GRAPHIC
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          overflow-hidden
        "
      >
        {/* Main central orbit */}

        <div
          className="
            absolute
            left-[48%]
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[560px]
            h-[560px]
            rounded-full
            border
            border-primary/[0.055]
          "
        />

        {/* Second orbit */}

        <div
          className="
            absolute
            left-[48%]
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[455px]
            h-[455px]
            rounded-full
            border
            border-primary/[0.055]
          "
        />

        {/* Third orbit */}

        <div
          className="
            absolute
            left-[48%]
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[345px]
            h-[345px]
            rounded-full
            border
            border-primary/[0.055]
          "
        />

        {/* Center circle */}

        <div
          className="
            absolute
            left-[48%]
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[230px]
            h-[230px]
            rounded-full
            border
            border-primary/[0.065]
            flex
            items-center
            justify-center
          "
        >
          <Code2
            size={92}
            strokeWidth={1}
            className="text-primary/[0.11]"
          />
        </div>

        {/* Vertical technical lines */}

        <div
          className="
            absolute
            left-[38%]
            top-0
            h-full
            w-px
            bg-primary/[0.035]
          "
        />

        <div
          className="
            absolute
            left-[43%]
            top-0
            h-full
            w-px
            bg-primary/[0.035]
          "
        />

        <div
          className="
            absolute
            left-[48%]
            top-0
            h-full
            w-px
            bg-primary/[0.035]
          "
        />

        <div
          className="
            absolute
            left-[53%]
            top-0
            h-full
            w-px
            bg-primary/[0.035]
          "
        />

        <div
          className="
            absolute
            left-[58%]
            top-0
            h-full
            w-px
            bg-primary/[0.03]
          "
        />

        {/* Horizontal technical lines */}

        <div
          className="
            absolute
            left-0
            right-0
            top-[25%]
            h-px
            bg-primary/[0.03]
          "
        />

        <div
          className="
            absolute
            left-0
            right-0
            top-[53%]
            h-px
            bg-primary/[0.025]
          "
        />

        <div
          className="
            absolute
            left-0
            right-0
            top-[78%]
            h-px
            bg-primary/[0.025]
          "
        />

        {/* Trophy */}

        <div
          className="
            absolute
            left-[48%]
            top-[10%]
            -translate-x-1/2
            w-20
            h-20
            rounded-full
            border
            border-primary/[0.08]
            flex
            items-center
            justify-center
          "
        >
          <Trophy
            size={32}
            strokeWidth={1.2}
            className="text-primary/[0.12]"
          />
        </div>

        {/* Target */}

        <div
          className="
            absolute
            left-[35%]
            bottom-[10%]
            w-20
            h-20
            rounded-full
            border
            border-primary/[0.08]
            flex
            items-center
            justify-center
          "
        >
          <Target
            size={32}
            strokeWidth={1.2}
            className="text-primary/[0.11]"
          />
        </div>

        {/* Growth */}

        <div
          className="
            absolute
            left-[59%]
            bottom-[10%]
            w-20
            h-20
            rounded-full
            border
            border-primary/[0.08]
            flex
            items-center
            justify-center
          "
        >
          <TrendingUp
            size={32}
            strokeWidth={1.2}
            className="text-primary/[0.11]"
          />
        </div>

        {/* Orbit dots */}

        <span
          className="
            absolute
            left-[39%]
            top-[30%]
            w-2
            h-2
            rounded-full
            bg-primary/[0.15]
          "
        />

        <span
          className="
            absolute
            left-[58%]
            top-[38%]
            w-2
            h-2
            rounded-full
            bg-primary/[0.13]
          "
        />

        <span
          className="
            absolute
            left-[44%]
            bottom-[22%]
            w-2
            h-2
            rounded-full
            bg-primary/[0.13]
          "
        />
      </div>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          container
          mx-auto
          max-w-[1400px]
          px-6
          md:px-10
          lg:px-12
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.92fr_1.08fr]
            gap-10
            lg:gap-12
            items-center
            min-h-[600px]
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div
            className="
              relative
              z-20
              lg:pl-2
            "
          >

            <h2
              className="
                text-[4.2rem]
                sm:text-[5.2rem]
                md:text-[6.2rem]
                lg:text-[6.4rem]
                xl:text-[7rem]
                font-normal
                tracking-[-0.075em]
                leading-[0.78]
              "
            >
              Competitive

              <span
                className="
                  block
                  ml-5
                  md:ml-8
                  font-serif
                  italic
                  font-normal
                  text-primary
                  tracking-[-0.07em]
                "
              >
                Programming
              </span>
            </h2>


            {/* Divider */}

            <div
              className="
                mt-9
                mb-7
                w-24
                h-px
                bg-primary
              "
            />


            {/* Description */}

            <p
              className="
                max-w-[470px]
                text-base
                md:text-lg
                leading-8
                text-muted-foreground
              "
            >
              A showcase of my competitive programming achievements,
              problem-solving skills, and performance across coding platforms.
            </p>

          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div
            className="
              relative
              z-20
              w-full
              max-w-[720px]
              ml-auto
            "
          >

            {/* =================================================
                LEETCODE
            ================================================= */}

            <a
              href={profiles[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                block
                relative
                w-full
                sm:w-[78%]
                ml-auto
                min-h-[205px]
                rounded-[26px]
                border
                border-primary/15
                bg-background/85
                backdrop-blur-xl
                p-6
                md:p-7
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-primary/40
                hover:shadow-[0_25px_70px_rgba(32,178,170,0.10)]
              "
            >

              {/* Soft glow */}

              <div
                className="
                  absolute
                  right-[-70px]
                  bottom-[-90px]
                  w-60
                  h-60
                  rounded-full
                  bg-primary/[0.035]
                  blur-3xl
                "
              />


              {/* Top */}

              <div
                className="
                  relative
                  z-10
                  flex
                  justify-between
                  items-start
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    border
                    border-primary/15
                    bg-primary/[0.04]
                    flex
                    items-center
                    justify-center
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                >
                  <span
                    className="
                      text-lg
                      font-bold
                      text-primary
                    "
                  >
                    LC
                  </span>
                </div>


                <div
                  className="
                    w-9
                    h-9
                    rounded-full
                    border
                    border-primary/20
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    group-hover:bg-primary
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight size={16} />
                </div>

              </div>


              {/* Content */}

              <div
                className="
                  relative
                  z-10
                  mt-3
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-primary
                      font-semibold
                    "
                  >
                    Primary Profile
                  </span>

                  <span
                    className="
                      rounded-md
                      bg-primary/10
                      px-2
                      py-1
                      text-[9px]
                      font-semibold
                      text-primary
                    "
                  >
                    ♛ Knight
                  </span>

                </div>


                <h3
                  className="
                    mt-2
                    text-2xl
                    md:text-3xl
                    font-bold
                    tracking-tight
                  "
                >
                  LeetCode
                </h3>


                <div
                  className="
                    flex
                    items-center
                    gap-7
                    mt-3
                  "
                >

                  <div>

                    <div
                      className="
                        text-xl
                        md:text-2xl
                        font-semibold
                      "
                    >
                      1900+
                    </div>

                    <span
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.2em]
                        text-muted-foreground
                      "
                    >
                      Rating
                    </span>

                  </div>


                  <div
                    className="
                      h-8
                      w-px
                      bg-border
                    "
                  />


                  <div>

                    <div
                      className="
                        text-xl
                        md:text-2xl
                        font-semibold
                      "
                    >
                      500+
                    </div>

                    <span
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.2em]
                        text-muted-foreground
                      "
                    >
                      Problems
                    </span>

                  </div>

                </div>


                <div
                  className="
                    mt-3
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    font-semibold
                    text-primary
                  "
                >
                  View Profile →
                </div>

              </div>

            </a>


            {/* =================================================
                CODEFORCES + CODECHEF
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-5
                mt-5
              "
            >

              {/* =================================================
                  CODEFORCES
              ================================================= */}

              <a
                href={profiles[1].link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  min-h-[245px]
                  rounded-[26px]
                  border
                  border-primary/15
                  bg-background/85
                  backdrop-blur-xl
                  p-6
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:shadow-[0_20px_60px_rgba(32,178,170,0.10)]
                "
              >

                <div
                  className="
                    absolute
                    right-[-50px]
                    bottom-[-70px]
                    w-48
                    h-48
                    rounded-full
                    bg-primary/[0.03]
                    blur-3xl
                  "
                />


                <div
                  className="
                    relative
                    z-10
                    flex
                    items-start
                    justify-between
                  "
                >

                  <div
                    className="
                      w-11
                      h-11
                      rounded-xl
                      border
                      border-primary/15
                      bg-primary/[0.04]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <span
                      className="
                        text-base
                        font-bold
                        text-primary
                      "
                    >
                      CF
                    </span>
                  </div>


                  <ArrowUpRight
                    size={19}
                    className="
                      text-muted-foreground
                      transition-all
                      duration-300
                      group-hover:text-primary
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </div>


                <div
                  className="
                    relative
                    z-10
                    mt-6
                  "
                >

                  <span
                    className="
                      inline-flex
                      rounded-md
                      bg-primary/10
                      px-2
                      py-1
                      text-[9px]
                      font-semibold
                      text-primary
                    "
                  >
                    ☆ Specialist
                  </span>


                  <h3
                    className="
                      mt-3
                      text-2xl
                      md:text-[1.9rem]
                      font-bold
                      tracking-tight
                    "
                  >
                    Codeforces
                  </h3>


                  <div
                    className="
                      flex
                      items-center
                      gap-7
                      mt-4
                    "
                  >

                    <div>

                      <div
                        className="
                          text-xl
                          md:text-2xl
                          font-semibold
                        "
                      >
                        1500+
                      </div>

                      <span
                        className="
                          text-[7px]
                          uppercase
                          tracking-[0.2em]
                          text-muted-foreground
                        "
                      >
                        Rating
                      </span>

                    </div>


                    <div
                      className="
                        h-8
                        w-px
                        bg-border
                      "
                    />


                    <div>

                      <div
                        className="
                          text-xl
                          md:text-2xl
                          font-semibold
                        "
                      >
                        60+
                      </div>

                      <span
                        className="
                          text-[7px]
                          uppercase
                          tracking-[0.2em]
                          text-muted-foreground
                        "
                      >
                        Problems
                      </span>

                    </div>

                  </div>


                  <div
                    className="
                      mt-5
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      font-semibold
                      text-primary
                    "
                  >
                    View Profile →
                  </div>

                </div>

              </a>


              {/* =================================================
                  CODECHEF
              ================================================= */}

              <a
                href={profiles[2].link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  min-h-[245px]
                  rounded-[26px]
                  border
                  border-primary/15
                  bg-background/85
                  backdrop-blur-xl
                  p-6
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:shadow-[0_20px_60px_rgba(32,178,170,0.10)]
                "
              >

                <div
                  className="
                    absolute
                    right-[-50px]
                    bottom-[-70px]
                    w-48
                    h-48
                    rounded-full
                    bg-primary/[0.03]
                    blur-3xl
                  "
                />


                <div
                  className="
                    relative
                    z-10
                    flex
                    items-start
                    justify-between
                  "
                >

                  <div
                    className="
                      w-11
                      h-11
                      rounded-xl
                      border
                      border-primary/15
                      bg-primary/[0.04]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <span
                      className="
                        text-base
                        font-bold
                        text-primary
                      "
                    >
                      CC
                    </span>
                  </div>


                  <ArrowUpRight
                    size={19}
                    className="
                      text-muted-foreground
                      transition-all
                      duration-300
                      group-hover:text-primary
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </div>


                <div
                  className="
                    relative
                    z-10
                    mt-6
                  "
                >

                  <span
                    className="
                      inline-flex
                      rounded-md
                      bg-primary/10
                      px-2
                      py-1
                      text-[9px]
                      font-semibold
                      text-primary
                    "
                  >
                    ☆☆ 2 Star
                  </span>


                  <h3
                    className="
                      mt-3
                      text-2xl
                      md:text-[1.9rem]
                      font-bold
                      tracking-tight
                    "
                  >
                    CodeChef
                  </h3>


                  <div
                    className="
                      flex
                      items-center
                      gap-7
                      mt-4
                    "
                  >

                    <div>

                      <div
                        className="
                          text-xl
                          md:text-2xl
                          font-semibold
                        "
                      >
                        1500+
                      </div>

                      <span
                        className="
                          text-[7px]
                          uppercase
                          tracking-[0.2em]
                          text-muted-foreground
                        "
                      >
                        Rating
                      </span>

                    </div>


                    <div
                      className="
                        h-8
                        w-px
                        bg-border
                      "
                    />


                    <div>

                      <div
                        className="
                          text-xl
                          md:text-2xl
                          font-semibold
                        "
                      >
                        60+
                      </div>

                      <span
                        className="
                          text-[7px]
                          uppercase
                          tracking-[0.2em]
                          text-muted-foreground
                        "
                      >
                        Problems
                      </span>

                    </div>

                  </div>


                  <div
                    className="
                      mt-5
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      font-semibold
                      text-primary
                    "
                  >
                    View Profile →
                  </div>

                </div>

              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};