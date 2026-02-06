<template>
  <div class="custom-calendar">
    <!-- Header -->
    <div class="custom-calendar-header">
      <button class="custom-calendar-nav prev" @click="prevMonth">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div
        class="custom-calendar-title"
        @click="togglePicker"
      >
        {{ currentMonthName }} {{ currentYear }}
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none"
          :class="{ rotated: showPicker }"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <button class="custom-calendar-nav next" @click="nextMonth">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M7.5 5L12.5 10L7.5 15"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <!-- Month/Year Picker Dropdown -->
    <transition name="dropdown">
      <div v-if="showPicker" class="custom-calendar-picker">
        <!-- Year selector -->
        <div class="custom-calendar-picker-year">
          <button @click="pickerYear--" class="year-nav">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <span class="year-value">{{ pickerYear }}</span>
          <button @click="pickerYear++" class="year-nav">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        
        <!-- Month grid -->
        <div class="custom-calendar-picker-months">
          <div
            v-for="(month, index) in monthsShort"
            :key="month"
            class="month-item"
            :class="{
              active: index === pickerMonth,
              current: index === dayjs().month() && pickerYear === dayjs().year()
            }"
            @click="selectMonthYear(index)"
          >
            {{ month }}
          </div>
        </div>
      </div>
    </transition>

    <!-- Weekday headers -->
    <div v-show="!showPicker" class="custom-calendar-weekdays">
      <div class="custom-calendar-weekday" v-for="day in weekDays" :key="day">
        {{ day }}
      </div>
    </div>

    <!-- Days grid -->
    <div v-show="!showPicker" class="custom-calendar-days">
      <div
        v-for="(day, index) in calendarDays"
        :key="index"
        class="custom-calendar-day"
        :class="{
          'other-month': day.otherMonth,
          selected: isSelected(day),
          today: isToday(day),
        }"
        @click="selectDate(day)"
      >
        {{ day.date }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import dayjs from "dayjs";

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => dayjs(),
  },
});

const emit = defineEmits(["update:modelValue", "select"]);

const currentDate = ref(dayjs());
const selectedDate = ref(props.modelValue || dayjs());
const showPicker = ref(false);
const pickerYear = ref(dayjs().year());
const pickerMonth = ref(dayjs().month());

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthsShort = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const currentYear = computed(() => currentDate.value.year());
const currentMonth = computed(() => currentDate.value.month());
const currentMonthName = computed(() => months[currentMonth.value]);

const calendarDays = computed(() => {
  const days = [];
  const firstDayOfMonth = currentDate.value.startOf("month");
  const lastDayOfMonth = currentDate.value.endOf("month");
  const startDay = firstDayOfMonth.day(); // 0 = Sunday
  const daysInMonth = lastDayOfMonth.date();

  // Previous month days
  const prevMonthDate = currentDate.value.subtract(1, "month");
  const daysInPrevMonth = prevMonthDate.endOf("month").date();
  for (let i = startDay - 1; i >= 0; i--) {
    days.push({
      date: daysInPrevMonth - i,
      month: prevMonthDate.month(),
      year: prevMonthDate.year(),
      otherMonth: true,
    });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      date: i,
      month: currentMonth.value,
      year: currentYear.value,
      otherMonth: false,
    });
  }

  // Next month days
  const remainingDays = 42 - days.length; // 6 rows * 7 days
  const nextMonthDate = currentDate.value.add(1, "month");
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      date: i,
      month: nextMonthDate.month(),
      year: nextMonthDate.year(),
      otherMonth: true,
    });
  }

  return days;
});

const togglePicker = () => {
  showPicker.value = !showPicker.value;
  if (showPicker.value) {
    pickerYear.value = currentYear.value;
    pickerMonth.value = currentMonth.value;
  }
};

const selectMonthYear = (monthIndex) => {
  pickerMonth.value = monthIndex;
  currentDate.value = dayjs().year(pickerYear.value).month(monthIndex).date(1);
  showPicker.value = false;
};

const prevMonth = () => {
  currentDate.value = currentDate.value.subtract(1, "month");
};

const nextMonth = () => {
  currentDate.value = currentDate.value.add(1, "month");
};

const selectDate = (day) => {
  const newDate = dayjs().year(day.year).month(day.month).date(day.date);
  selectedDate.value = newDate;
  emit("update:modelValue", newDate);
  emit("select", newDate);

  // If clicked on other month, navigate to that month
  if (day.otherMonth) {
    currentDate.value = newDate;
  }
};

const isSelected = (day) => {
  if (!selectedDate.value) return false;
  return (
    day.date === selectedDate.value.date() &&
    day.month === selectedDate.value.month() &&
    day.year === selectedDate.value.year()
  );
};

const isToday = (day) => {
  const today = dayjs();
  return (
    day.date === today.date() &&
    day.month === today.month() &&
    day.year === today.year() &&
    !day.otherMonth
  );
};

watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) {
      selectedDate.value = newVal;
      currentDate.value = newVal;
    }
  }
);
</script>

<style lang="less" scoped>
.custom-calendar {
  width: 100%;
  max-width: 380px;
  font-family: Manrope;
  position: relative;

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  &-nav {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid #fff;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #52525b;
    transition: all 0.2s;

    &:hover {
      border: none;
      background: linear-gradient(135deg, #f79355 0%, #ef536b 100%);
      color: #fff;
    }
  }

  &-title {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #18181b;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
    padding: 8px 16px;
    border-radius: 24px;
    transition: all 0.2s;

    &:hover {
      background: #f4f4f5;
    }

    svg {
      color: #71717a;
      transition: transform 0.3s ease;

      &.rotated {
        transform: rotate(180deg);
      }
    }
  }

  &-picker {
    background: #fff;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    margin-bottom: 16px;

    &-year {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      margin-bottom: 20px;
      padding-bottom: 16px;
      border-bottom: 1px solid #f4f4f5;

      .year-nav {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: none;
        background: #f4f4f5;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #52525b;
        transition: all 0.2s;

        &:hover {
          background: linear-gradient(135deg, #f79355 0%, #ef536b 100%);
          color: #fff;
        }
      }

      .year-value {
        font-size: 20px;
        font-weight: 600;
        color: #18181b;
        min-width: 80px;
        text-align: center;
      }
    }

    &-months {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;

      .month-item {
        padding: 12px 8px;
        text-align: center;
        border-radius: 12px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        color: #52525b;
        transition: all 0.2s;

        &:hover:not(.active) {
          background: #f4f4f5;
          color: #18181b;
        }

        &.current:not(.active) {
          color: #ef536b;
        }

        &.active {
          background: linear-gradient(135deg, #f79355 0%, #ef536b 100%);
          color: #fff;
        }
      }
    }
  }

  &-weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    margin-bottom: 12px;
  }

  &-weekday {
    text-align: center;
    color: #71717a;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 8px 0;
  }

  &-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
  }

  &-day {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    color: #18181b;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.2s;
    color: #1A1E1D;
text-align: center;

/* H6 */
font-family: Manrope;
font-size: var(--font-size-base, 16px);
font-style: normal;
font-weight: 500;
line-height: normal;

    &:hover:not(.selected):not(.other-month) {
      background: #f4f4f5;
    }

    &.other-month {
      color: #d4d4d8;
    }

    &.today:not(.selected) {
      color: #ef536b;
      font-weight: 500;
    }

    &.selected {
      background: linear-gradient(135deg, #f79355 0%, #ef536b 100%);
      color: #fff;
      font-weight: 500;
    }
  }
}

// Dropdown animation
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
